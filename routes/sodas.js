var express = require('express');
var router = express.Router();
var SodaModel = require('../models/SodaModel.js');
/*
* GET
*/
router.get('/', function (req, res) {

});

/*
* GET
*/
router.get('/:id', function (req, res) {

});

/*
* POST
*/
router.post('/', function (req, res) {
  // create a new TaskModel
  var soda = new SodaModel({
    // here we grab the text attribute from the request body
        soda : req.body.soda
  });

  // save the task model to the database
  soda.save(function (err, soda) {
    // since this command is asyncronous, we have to put the return in a callback
    return res.json(soda);
  });
});

/*
* PUT
*/
router.put('/:id', function (req, res) {

});

/*
* DELETE
*/
router.delete('/:id', function (req, res) {

});

module.exports = router;
