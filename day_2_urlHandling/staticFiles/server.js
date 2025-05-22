const http = require('http');
const fs = require('fs');
const path = require('path');
const querystring = require('querystring');

function servePage(res, filename) {
  const filePath = path.join(__dirname, 'pages', filename);
  const footerPath = path.join(__dirname, 'components', 'footer.html');

  fs.readFile(filePath, 'utf8', (err, pageData) => {
    if (err) {
      res.writeHead(500);
      res.end('Error loading page');
    } else {
      fs.readFile(footerPath, 'utf8', (err, footerData) => {
        if (err) {
          res.writeHead(500);
          res.end('Error loading footer');
        } else {
          const finalPage = pageData.replace('<!-- FOOTER -->', footerData);
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(finalPage);
        }
      });
    }
  });
}

function serveStaticFile(res, filePath) {
  const ext = path.extname(filePath);
  let contentType = 'text/plain';

  if (ext === '.css') contentType = 'text/css';
  else if (ext === '.js') contentType = 'application/javascript';
  else if (ext === '.png') contentType = 'image/png';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Static file not found');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
}

const server = http.createServer((req, res) => {
  if (req.url.startsWith('/public/')) {
    const filePath = path.join(__dirname, req.url);
    return serveStaticFile(res, filePath);
  }

  if (req.method === 'POST' && req.url === '/submit-contact') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const formData = querystring.parse(body);
      const name = formData.name;
      const message = formData.message;

      const responseHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Thank You</title>
          <link rel="stylesheet" href="/public/style.css">
        </head>
        <body>
          <h1>Thank You, ${name}!</h1>
          <p>Your message has been received:</p>
          <blockquote>${message}</blockquote>
          <!-- FOOTER -->
          <script src="/public/script.js"></script>
        </body>
        </html>
      `;

      const footerPath = path.join(__dirname, 'components', 'footer.html');
      fs.readFile(footerPath, 'utf8', (err, footer) => {
        if (err) {
          res.writeHead(500);
          res.end('Error loading footer');
        } else {
          const finalResponse = responseHtml.replace('<!-- FOOTER -->', footer);
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(finalResponse);
        }
      });
    });
    return;
  }

  const route = req.url;

  switch (route) {
    case '/':
      servePage(res, 'index.html');
      break;
    case '/about':
      servePage(res, 'about.html');
      break;
    case '/services':
      servePage(res, 'services.html');
      break;
    case '/contact':
      servePage(res, 'contact.html');
      break;
    case '/blog':
      servePage(res, 'blog.html');
      break;
    default:
      servePage(res, '404.html');
      break;
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
