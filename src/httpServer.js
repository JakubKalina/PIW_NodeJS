const http = require('http');
const url = require('url');
const os = require('os')

module.exports = http.createServer((req, res) => {

    var service = require('./service.js');
    const reqUrl = url.parse(req.url, true);

    // ping
    if (reqUrl.pathname == '/ping' && req.method === 'GET') {
        var response = {
            "text": "pong"
        };

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    }

    // datetime
    if (reqUrl.pathname == '/datetime' && req.method === 'GET') {
        var datetime = new Date();
        var response = {
            "text": datetime.toString()
        };

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    }

    // cpus
    if (reqUrl.pathname == '/cpus' && req.method === 'GET') {
        const cpuCount = os.cpus();
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(cpuCount));
    }

    // env
    if (reqUrl.pathname == '/env' && req.method === 'GET') {
        const variables = process.env;

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(variables));
    }

    // joke
    if (reqUrl.pathname == '/joke' && req.method === 'GET') {
        var joke = require('./joke');
        var newJoke = joke.getJoke();
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(newJoke));
    }

    // somedata
    if (reqUrl.pathname == '/somedata' && req.method === 'GET') {
        var fs = require('fs')
        var data = fs.readFileSync('./assets/data.json', 'utf8');

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(data);
    }

});