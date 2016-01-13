'use strict';

var _ = require('lodash');
var Sensedata = require('./sensedata.model');
var User = require('../user/user.model');

// Get list of sensedata
exports.index = function(req, res) {

  Sensedata.find(function (err, sensedata) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(sensedata);
  });
};

// Get a sense data for a singele user
exports.show = function (req, res) {

  // Gets the routparamter 'id'
  var userId = req.params.id;

  // Check to see that the user exists
  User.findById(userId, function (err, user) {
      if (err) { return handleError(res, err); }
      if (!user) { return res.status(401).send('User not found with id: ' + userId); }
  });

  // Fetch all sense data using the provided user id
  Sensedata.find({"userId" : userId }, function (err, sensedata) {
    
    if(err) { return handleError(res, err); }
    if (!sensedata) { return res.status(401).send('No data found for user with id: ' + userId); }
    return res.json(sensedata);
  });
};

// Creates a new sensedata in the DB.
exports.create = function(req, res) {

  // Fetch the user id from the body
  var userId = req.body.userId;

  // Check to see that the user exists
  User.findById(userId, function (err, user) {
      if (err) { return handleError(res, err); }
      if (!user) { return res.status(401).send('User not found with id: ' + userId); }
  });

  // Add the sense data to the db
  Sensedata.create(req.body, function(err, sensedata) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(sensedata);
  });
};

// Updates an existing sensedata in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Sensedata.findById(req.params.id, function (err, sensedata) {
    if (err) { return handleError(res, err); }
    if(!sensedata) { return res.status(404).send('Not Found'); }
    var updated = _.merge(sensedata, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(sensedata);
    });
  });
};

// Deletes a sensedata from the DB.
exports.destroy = function(req, res) {
  Sensedata.findById(req.params.id, function (err, sensedata) {
    if(err) { return handleError(res, err); }
    if(!sensedata) { return res.status(404).send('Not Found'); }
    sensedata.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}