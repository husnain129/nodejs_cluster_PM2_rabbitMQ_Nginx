while using loadtst, we can use number of parameters like - 
 - -n     -set max number of requests
 - -c     -concurrent requests
 - --rps  -number of requests per second

The command will be
    - loadtest -n 1000 -c 100 --rps 200 http://localhost:3000/5

