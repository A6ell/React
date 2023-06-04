const http = require ("http");
const { hostname } = require("os");
const host = "127.0.0.1";
const port = 8000;
const server = http.createServer(function (req,res){
    res.writeHead(200, {"Content-Type":"text/plain"})
    res.end("welcome to sage\n")
});
server.listen(port, host, function(){
    console.log(`server running at http://${hostname}:${port}/`);
});