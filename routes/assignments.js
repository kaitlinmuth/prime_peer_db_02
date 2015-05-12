var express = require('express');
var router = express.Router();

var Assignment = require('../models/assignment');
var mongoose = require('mongoose');

router.get('/', function(request,response, next){
    Assignment.find(function(err, data){
        response.json(data);
    })
});

router.post('/', function(req,res, next){
    Assignment.create(req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});
router.get('/:id', function(req, res, next){
    Assignment.findById(req.params.id, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

router.put('/:id', function(req, res, next){
    Assignment.findByIdAndUpdate(req.params.id,req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

router.delete('/:id', function(req, res, next){
    Assignment.findByIdAndRemove(req.params.id,req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

module.exports = router;

