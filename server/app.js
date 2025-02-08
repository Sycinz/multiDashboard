const fs = require('fs');
const yaml = require('yaml');
const http = require('http');

var config = {
    website: {
        port: 9191,
        host: 'localhost'
    },

    // rest of config will be added later ...
};

// Generating config.yaml file 
const yamlStr = yaml.stringify(config);

fs.writeFileSync('config.yaml', yamlStr, 'utf8');
console.log('config.yaml file created successfully.');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World!');
    res.end();
}).listen(8080);

console.log(`Server listening on port ${config.website.port} ...`);