const jwt = require('jsonwebtoken');
let secret = process.env.SECRET_KEY || "";

function verifyToken(req,res,next) {

    let token = req.cookies.token || '';

    //console.log("token", token);
    
    if (!token){
       res.redirect('/login')
    }

    else {

        jwt.verify(token, secret, function(err,decoded){

    if (err) {
        console.log(err);
        return res.redirect('/login')
    }
    else {

        console.log("Decoded: " + decoded.permission);
       req.userId = decoded.id;
        next();
    }

        })
      
    }

}

module.exports = verifyToken;