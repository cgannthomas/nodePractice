const http = require('http'),
        fs = require('fs')

const server = http.createServer((req, res) => {
    console.log('request made')
    console.log(req.url, req.method)

    //send a plain text content
    // res.setHeader('content-type', 'text/plain')
    // res.write("Hello Siji")
    // res.end()

    // send an html content
    res.setHeader('content-type', 'text/html')
    // res.write("<p>Hello Siji</p>")
    // res.end()

    //send an html file
    fs.readFile('./views/index.html', (err, data) => {
        if(err) console.log(err);
        else res.end(data); //res.write(data);

        res.end();
    })
    
});

server.listen(3000, 'localhost', () => {
    console.log('Listening requests as port 3000');

})