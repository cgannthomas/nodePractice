const express = require('express'),
    app = express();

    app.listen(3000)

    //just loading view
    // app.get('/', (req, res) => {
    //     res.send('<p> HomePage</p>')
    // })

    // loading view with html file
    app.get('/', (req, res) => {
        res.sendFile('./views/index.html', {root: __dirname})
    })

    //redirect
    app.get('/about-us', (req, res) => {
        res.redirect('/about')
    })

    //404 page
    app.use( (req, res) => {
        res.status(404).sendFile('./views/404.html', {root: __dirname})
    })

    