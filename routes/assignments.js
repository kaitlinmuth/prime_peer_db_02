var express = require('express');
var router = express.Router();

var Assignment = require('../models/assignment');
var mongoose = require('mongoose');

router.get('/', function(req,res, next){
    var search = {};
    var sort = {name: 1};

    if(req.query.name)
        search.name = req.query.name;

    console.log("sort is ",req.query.sort);

    if (req.query.sort)
        sort.name = req.query.sort;

    Assignment.find(
        search,
        null,
        {
            sort: sort
        },
        function(err, data){
        res.json(data);
    });
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
//router.get('/search/:note', function(req, res, next){
//  Todo.find({note: new RegExp(req.params.note, 'i') }, function (err, todos) {
//    if (err) return next(err);
//    res.json(todos);
//  });
//});



module.exports = router;

