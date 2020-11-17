const http = require('http');

const hostname = '127.0.0.1';
const port = 9999;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end(`Hola mundo`);
})

server.listen(port, hostname, () => {
    console.log(`El servidor esta funcionando en ${hostname} y el puerto ${port}`);
})