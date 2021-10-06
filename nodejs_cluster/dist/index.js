"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fibo = require("./Fibonacci");
var cluster = require("cluster");
var numCPUs = require("os").cpus().length;
if (cluster.isMaster) {
    console.log("Total number of CPU = ", numCPUs);
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    cluster.on("online", function (worker) {
        console.log("Worker " + worker.process.pid + " is online");
    });
    cluster.on("exit", function (worker, code, signal) {
        console.log("Worker " +
            worker.process.pid +
            " died with code: " +
            code +
            ", and signal: " +
            signal);
        console.log("Starting a new worker");
        cluster.fork();
    });
}
else {
    var app = require("express")();
    app.get("/:number", function (req, res) {
        console.log("Worker Process id = " + cluster.worker.process.pid + "accept request");
        var result = fibo.calculateFibonacci(parseInt(req.params.number));
        res.send({ result: result });
    });
    app.listen(3000, function () {
        console.log("Server is running on port 3000");
    });
}
//# sourceMappingURL=index.js.map