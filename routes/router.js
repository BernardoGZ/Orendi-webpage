const express = require('express');
const router = express.Router();
const path = require("path");
const Property = require('../model/property');
const User = require('../model/user');
const jwt = require("jsonwebtoken");
const verify = require("../middleware/access");

/**
 * Get methods
 */
//Se proporciona todas las propiedades en la DB con el metodo find()
router.get('/', async function(req,res){
    let properties = await Property.find();
    res.render("index", {properties});
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
router.get('/admin', async function(req,res){
    res.render("admin");
});
router.get('/login', async function(req,res){
    res.render("login");
})

/**
 * Post methods
 */

 router.post('/admin', async function(req,res){
    let property = new Property(req.body);
    await property.save();
    res.redirect("/admin");
});
module.exports = router;