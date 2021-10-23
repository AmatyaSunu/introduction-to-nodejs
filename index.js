const http = require("http");

const PORT = 8080;

const server = http.createServer((req, res) => {
    // res.setHeader('Content-Type', "text/plain");

    //for plain text
   /*  res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("Introduction to NodeJs"); */

    //for html content
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<h1>Introduction to NodeJs</h1>");
    
    res.end();
});

server.listen(PORT, () =>{
 console.log("Server is running on port: ", PORT);
});