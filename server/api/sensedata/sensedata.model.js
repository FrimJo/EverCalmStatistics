'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var SensedataSchema = new Schema({
  data: Number,
  timestamp: Number,
  userId: ObjectId
});

module.exports = mongoose.model('Sensedata', SensedataSchema);