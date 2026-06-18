const http = require('http');
const fs = require('fs');

const PORT = 3000;

const server = http.createServer((req,res)=>{
    if(req.url === '/' || req.url === '/home'){
        fs.readFile('contents/home.html',(err,data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
    else if(req.url === '/about'){
        fs.readFile('contents/about.html',(err,data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
    else if(req.url === '/contact'){
        fs.readFile('contents/contact.html',(err,data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
    else if(req.url === '/services'){
        fs.readFile('contents/services.html',(err,data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
    else if(req.url === '/script.js'){
        fs.readFile('contents/script.js',(err,data) => {
            res.writeHead(200, {'Content-Type': 'text/js'});
            res.write(data);
            res.end();
        });
    }
    else if(req.url === '/img.png'){
        fs.readFile('contents/img.png',(err,data) => {
            res.writeHead(200, {'Content-Type': 'image/png'});
            res.write(data);
            res.end();
        });
    }
    else if(req.url === '/style.css'){
        fs.readFile('contents/style.css',(err,data) => {
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(data);
            res.end();
        });
    }
    else {
        fs.readFile('contents/error.html',(err,data) => {
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
    
}).listen(PORT,()=>{
    console.log(`our server is live on - http://localhost:${PORT}`);
})