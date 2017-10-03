var express = require('express');
var db = require('../models');
var router = express.Router();


//Display volunteer profile:
///Need to fix this up:
router.get('/:id', function(req, res){
  dp.post.find({
    where: {id: req.params.id},
    include: [db.volunteer]
  })
})
