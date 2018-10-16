var express = require('express');
var router = express.Router();
var burger = require('../models/burgers.js')


// base route
//what about app.get?
router.get('/', function(req, res){
  burger.all(function(burger_data){
    console.log(burger_data);
    res.render('index', {burger_data});
  })
})

router.put('/burger/update', function(req, res){
  burger.update(req.body.burger_id, function(result){
    console.log(result);
    res.redirect('/');
  })
})


//add post put update delete

module.exports = router;
