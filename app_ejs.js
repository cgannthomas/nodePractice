const express = require('express'),
    app = express(),
    morgan = require('morgan');

    app.use(morgan('dev'))

    app.set('view engine', 'ejs')

    app.listen(3000)

    app.use(express.static('public'))
    // loading view with ejs file
    app.get('/', (req, res) => {
        res.render('index', {title : 'Index'})
    })

    app.get('/about', (req, res) => {
        res.render('about', {title : 'About Us'})
    })

    //redirect
    app.get('/about-us', (req, res) => {
        res.redirect('/about')
    })

    //404 page
    app.use( (req, res) => {
        res.status(404).render('404', {title: '404 !'})
    })

    