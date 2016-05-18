var SodaModel = require('../models/SodaModel.js');

/**
* TaskController.js
*
* @description :: Server-side logic for managing tasks.
*/
module.exports = {

  /**
  * TaskController.list()
  */
  list: function (req, res) {
    SodaModel.find(function (err, soda) {
      return res.json(soda);
    });
  },

  /**
  * TaskController.show()
  */
  show: function (req, res) {
    var id = req.params.id;
    SodaModel.findOne({_id: id}, function (err, soda) {
      return res.json(soda);
    });
  },

  /**
  * TaskController.create()
  */
  create: function (req, res) {
    var soda = new SodaModel({
            soda : req.body.soda
    });

    soda.save(function (err, soda) {
      return res.json(soda);
    });
  },

  /**
  * TaskController.update()
  */
  update: function (req, res) {
    var id = req.params.id;
    SodaModel.findOne({_id: id}, function (err, soda) {
      soda.soda = req.body.soda ? req.body.soda : soda.soda;
      soda.save(function (err, soda) {
        return res.json(soda);
      });
    });
  },

  /**
  * TaskController.remove()
  */
  remove: function (req, res) {
    var id = req.params.id;
    SodaModel.findByIdAndRemove(id, function (err, soda) {
      return res.json(soda);
    });
  }
};
