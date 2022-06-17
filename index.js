// Libraries & dependencies
const express = require('express'); // for our app
const mongoose = require('mongoose'); // for connection with database
const cookieParser = require('cookie-parser'); // for reciving and creating our cookies
const path = require('path'); // for better using path to files
const routes = require('./routes/routes');
const shop = express(); // here is beginning our app
// options
const PORT = process.env.PORT || 3000;
const staticOptions = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html', 'css', 'js'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: (res, path, stat) => {
        return;
    }
};
// ===================================================================================
// settings app
shop.use(express.json()); // our infromation will be changing with JSON standard
shop.use(express.urlencoded({extended: true})); //it parses incoming request from users
shop.use(express.static( path.join(__dirname + '/public'), staticOptions));
shop.set('view engine', 'ejs');
shop.set('views', path.join(__dirname + '/views'));
shop.use('/shop', routes);
shop.listen(PORT, () => {
    console.log(`Flower Shop working on port ${PORT}\t${Date()}`);
})