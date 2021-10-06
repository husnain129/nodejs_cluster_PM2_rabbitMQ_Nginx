import { Request, Response } from "express";
var fibo = require("./Fibonacci");
const cluster = require("cluster");
const numCPUs = require("os").cpus().length;

if (cluster.isMaster) {
  console.log("Total number of CPU = ", numCPUs);
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("online", (worker: any) => {
    console.log("Worker " + worker.process.pid + " is online");
  });

  cluster.on("exit", (worker: any, code: any, signal: any) => {
    console.log(
      "Worker " +
        worker.process.pid +
        " died with code: " +
        code +
        ", and signal: " +
        signal
    );
    console.log("Starting a new worker");
    cluster.fork();
  });
} else {
  const app = require("express")();
  app.get("/:number", (req: Request, res: Response) => {
    console.log(
      "Worker Process id = " + cluster.worker.process.pid + "accept request"
    );
    let result = fibo.calculateFibonacci(parseInt(req.params.number));
    res.send({ result });
  });

  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
}
