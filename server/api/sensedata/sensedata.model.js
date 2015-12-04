'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SensedataSchema = new Schema({
  data: Number,
  timestamp: Number
});

module.exports = mongoose.model('Sensedata', SensedataSchema);