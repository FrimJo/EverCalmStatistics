'use strict';

var _ = require('lodash');
var Sensedata = require('./sensedata.model');

// Get list of sensedatas
exports.index = function(req, res) {
  Sensedata.find(function (err, sensedatas) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(sensedatas);
  });
};

// Get a single sensedata
exports.show = function(req, res) {
  Sensedata.findById(req.params.id, function (err, sensedata) {
    if(err) { return handleError(res, err); }
    if(!sensedata) { return res.status(404).send('Not Found'); }
    return res.json(sensedata);
  });
};

// Creates a new sensedata in the DB.
exports.create = function(req, res) {
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