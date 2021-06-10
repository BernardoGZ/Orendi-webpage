const express = require('express');
const router = express.Router();
const path = require("path");
const Property = require('../model/property');
const User = require('../model/user');
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const verify = require("../middleware/access");
dotenv.config();

let secret = process.env.SECRET_KEY || "";

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
router.get('/register', async function(req,res){
    res.render("register");
})

/**
 * Post methods
 */

 router.post('/admin', async function(req,res){
    let property = new Property(req.body);
    await property.save();
    res.redirect("/admin");
});

router.post('/register', async (req,res) => {
 
    //console.log(req.body);
    var user = new User(req.body);
    user.password = await user.encryptPassword(user.password);
    
    await user.save();
  
    res.redirect('/');
  
} )

router.post('/login', async (req,res) => {

    let email = req.body.email;
    let password = req.body.password;
  
    let user = await User.findOne({email:email});
    
    if (!user) {
        return res.status(404).send("The user does not exist");
    }
  
    else {
        console.log("<<<< User founded<<< " + user);
      let valid = await user.validatePassword(password);
      console.log("<<<<<" + valid);
  
      if (valid) {

        let token = jwt.sign({id:user.email, permission:true}, secret, {expiresIn: "1h"  } );
        console.log("Token: " + token);
        res.cookie("token", token, {httpOnly:true, maxAge: 60000 })
        res.redirect('/');

      }
      else {
  
      console.log("Password is invalid");
      res.end("Contraseña es incorrecta");
      }
  
    }
  
    // res.redirect('/');
  })
module.exports = router;