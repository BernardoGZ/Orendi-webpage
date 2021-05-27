const express = require('express');
const router = express.Router();
let path = require("path");

router.get('/', async function(req,res){
    res.render("index");
});

router.get('/contacto', async function(req,res){
    res.render("contacto");
});

router.get('/propiedades', async function(req,res){
    res.render("propiedades");
});
router.get('/about', async function(req,res){
    res.render("acerca");
});

module.exports = router;