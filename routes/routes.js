const express = require('express');
const router = express.Router();

router.use(express.urlencoded({extended: true}));
router.use(express.json());

// main endpoints and routes
/*
    /shop/index         - main site
    /shop/products      - list of products
    /shop/add           - here we want add product to our database
    /shop/login         - login panel
    /shop/signup        - signup/register panel

*/

router.get('/', (req, resp) => {
    resp.redirect('/shop/index');
});

router.get('/index', (req, resp) => {
    resp.render('index');
});

router.get('/panel', (req, resp) => {
    resp.render('panel');
});

module.exports = router;