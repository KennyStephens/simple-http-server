const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>HTTP Server Home</title></head>');
        res.write('<body><h1>Welcome to My Simple Node Server</h1></body>');
        res.write('</html>')
        res.end();
    }
    if(url === '/api') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>HTTP Server JSON</title></head>');
        res.write(JSON.stringify({
          'Super Mario Bros': 'Mario',
          'The Legend of Zelda': 'Link',
          'Metroid': 'Samus'
        }));
        res.write('</html>')
        res.end();
    }
});

server.listen(5000);