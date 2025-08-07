const http = require("node:http");

const server = http.createServer(function (req, res) {
    if (req.url === "/getsecretdata") {
        res.end("there is no secret data");
        return;
    }
    res.end("hello world");
}); 

server.listen(7031);

