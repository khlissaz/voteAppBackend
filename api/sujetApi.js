var express = require('express');
var router = express.Router();
var Sujet = require("../models/sujetModel");


router.post('/create', function (req, res) {
    var sujet = new Sujet(req.body);
    console.log(req.body)
    sujet.save(function (err, user) {
        if (err) {
            res.send(err);
            console.log(err);
        }
        console.log(user);
        res.send(user);
    });
});


router.get('/getAll', function (req, res) {

    Sujet.find().populate("user").exec(function (err, result) {
        if (err) {
            throw err;
        }
        res.send(result)
    });

});

router.post('/delete/:id', function (req, res) {
    Sujet.findByIdAndDelete(req.params.id, function (err, result) {
        if (err) {
            throw err;
        }
        res.send(result)
    });
});


router.post('/update/:id', function (req, res) {
    console.log(req.body)
    console.log(req.params.id)
    Sujet.findByIdAndUpdate(req.params.id, function (err, result) {
        if (err) {
           
            throw (err);
        }
        
        res.send(result);

    });
});
router.post('/updateSujet/:titre', function (req, res) {
    console.log(req.body)
    console.log(req.params.id)
    Sujet.findByIdAndUpdate(req.params.titre, function (err, result) {
        if (err) {
            console.log('22222')
          
            throw (err);
        }
       
        res.send(result);

    });
});

module.exports = router;