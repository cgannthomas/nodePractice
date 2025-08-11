const http = require('http'),
        fs = require('fs')

const server = http.createServer((req, res) => {
    let path = './views/',
        stCode = 200;
        
    res.setHeader('content-type', 'text/html');

    switch(req.url) {
        case '/' :
            path += 'index.html';
            break;
        case '/about' :
            path += 'about.html';
            break;
        case '/about-us' :
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default :
            path += '404.html';
            stCode = 404;
            break;
    }

    res.statusCode = stCode;

    console.log(req.url);

    fs.readFile(path, (err, data) => {
            if(err) console.log(err);
            else res.end(data); //res.write(data);
    
            res.end();
        })
});

server.listen(3000, 'localhost', () => {
    console.log('Listening requests as port 3000');

})