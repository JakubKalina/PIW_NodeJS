const hostname = '127.0.0.1';
const port = 8088;

const server = require('./httpServer.js');

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});