//all volunteers:

var express = require('express');
var db = require('../models');
var router = express.Router();

//getting volunteer & their bio:
router.get('/:id', function(req, res) {
  db.volunteer.find({
    where: {id: req.params.id},
  })
});

// //Display volunteer info:
// ///Need to fix this up:
// router.get('/:id', function(req, res){
//   dp.post.find({
//     where: {id: req.params.id},
//     include: [db.volunteer]
//   })
// })

module.exports = router;
