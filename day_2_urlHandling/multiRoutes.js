const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-Type' : 'text/plain'});

    // route handling
    if (req.url === '/') {
    res.end('Welcome to the home page');
    } else if (req.url === '/about') {
        res.end('Welcome to the about page');
    } else if (req.url === '/contact') {
        res.end('Welcome to the contact page');
    } else if(req.url === '/services') {
        res.end('Welcome to the services page');
    } else if (req.url === '/blog') {
        res.end('Welcome to the blog page');
    } else {
        res.writeHead(404, {'content-Type' : 'text/plain'});
        res.end('404 Page not found');
    }
});
    server.listen(3000, () => {
        console.log('Server is running at http://localhost:3000');
});