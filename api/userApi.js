var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var User = require("../models/userModel");
var jwt=require('jsonwebtoken')
    

router.post('/login', function (req, res) {

    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) {
            return res.send(err);
        }
        if (!user) {
            return res.send({ message: "  wrong username!" });
        }
        bcrypt.compare(req.body.password, user.password, function (err, result) {
            if (!result) {
                return res.send({ message: " wrong password" });
            }
            else {
                jwt.sign({user}, 'secretkey', (err, token) => {
                    res.send({ 
                        token 
                    });

                });


                console.log("user connected!");
            }
        })

    });

});



router.post('/create', function (req, res) {
    var user = new User(req.body);
    console.log(req.body)
    user.save(function (err, user) {
        if (err) {
            res.send(err);
        }
        console.log(user);
        res.send(user);
    });
});


router.get('/getAllUsers',function(req,res){
    
    User.find(function(err, result){
        if(err){
            throw err;
        }
        res.send (result)
    });
    
    });


router.post('/deleteUser/:id', function (req, res) {
    User.findByIdAndDelete(req.params.id, function (err, result) {
        if (err) {
            throw err;
        }
        res.send(result)
    });




});

router.get('/getUser/:userName', function (req, res) {

    User.findOne({'userName':req.params.userName},function(err, result){
        if(err){
            throw err;
        }
        res.send (result)
    });
    
});


router.post('/updateUser/:id', function (req, res) {
  console.log(req.body)
    User.findByIdAndUpdate(req.params.id, function (err, result) {
        if (err) {
            throw (err);
        }
        res.send(result);
    });
});
router.post("/affect/:idUser/:idSujet", function (req, res) {
    User.findByIdAndUpdate(req.params.idUser, { $push: { sujets: req.params.idSujet } }, function (err, user) {
        if (err) {
            throw err;
        }
        res.send(user)
    });

});
module.exports = router;
