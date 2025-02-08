const fs = require('fs');
const yaml = require('yaml');
const http = require('http');

var config = {
    general: {
        website_title: "Multi Dashboard",
        working_type: "server",
        website_port: 9191,
        listening_port: 9192,
        host: 'localhost'
    },

    // rest of config will be added later ...
};

// Generating config.yaml file 
const yamlStr = yaml.stringify(config);

fs.writeFileSync('../server/config.yaml', yamlStr, 'utf8');
console.log('config.yaml file created successfully.');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World!');
    res.end();
}).listen(8080);

console.log(`Server listening on ports:\n website: ${config.general.website_port}\n handling_port: ${config.general.listening_port}\n ...`);