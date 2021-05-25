const express = require('express');
const router = express.Router();
let path = require("path");

router.get('/', async function(req,res){
    res.render("index");
});

module.exports = router;