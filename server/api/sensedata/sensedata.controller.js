'use strict';

var _ = require('lodash');
var Sensedata = require('./sensedata.model');
var User = require('../user/user.model');

// Get list of sensedata
exports.getAll = function(req, res) {

  // Fetch all sense data using the provided user id
  Sensedata.find(function (err, sensedata) {
    
    if(err) { return handleError(res, err); }
    if (!sensedata) { return res.status(401).send('No data found for user with id: ' + userId); }
    return res.status(200).json(sensedata);
  });
};

exports.getLatestDataByUserId = function (req, res){

    var userId = req.params.id;
    console.log("start: " + userId);
    if(userId){
      Sensedata.findOne({'userId' : userId}).sort({_id : 1}).exec(function (err, singleEntry){
        if(err) {
          console.log("err: ");
          return handleError(res, err);
        } else if (!singleEntry) {
          console.log("!singleEntry: ");
          return res.status(404).send('No data found for user with id: ' + userId);
        }else{
          console.log("singleEntry: " + singleEntry);
          return res.status(200).json({'userId': userId, 'data': singleEntry.data, 'timestamp': singleEntry.timestamp});
        }
      });

    }
}

// Get a sense data for a singele user
exports.getAllDataByUserId = function (req, res) {

  // Gets the routparamter 'id'
  var userId = req.params.id;

  // Check to see that the user exists
  User.findById(userId, function (err, user) {
      if (err) {
        return handleError(res, err);
      } else if (!user) {
        return res.status(404).send('User not found with id: ' + userId);
      }
      console.log("User exists: " + user);
  });

  // Fetch all sense data using the provided user id
  Sensedata.find({"userId" : userId }, function (err, sensedata) {
    
    if(err) {
      return handleError(res, err);
    } else if (!sensedata) {
      return res.status(404).send('No data found for user with id: ' + userId);
    } else {
      return res.status(200).json(sensedata);  
    }
    
  });
  
};

// Creates a new sensedata in the DB.
exports.create = function(req, res) {

  // Fetch the user id from the body
  var userId = req.body.userId;

  // Check to see that the user exists
  User.findById(userId, function (err, user) {
      if (err) {
        return handleError(res, err);
      } else if (!user) {
        return res.status(404).send('User not found with id: ' + userId);
      }
      console.log("User exists: " + user._id);
  });

  // Add the sense data to the db
  Sensedata.create(req.body, function(err, sensedata) {

    if(err) { 
      return handleError(res, err);
    } else if(!sensedata){
      return res.status(404).send('No data found for user with id: ' + userId);
    } else {
      console.log("TEST");
      return res.status(200).json(sensedata);  
    }
    
  });
};/*

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
};*/

function handleError(res, err) {
  return res.status(500).send(err);
}