/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Sensedata = require('./sensedata.model');

exports.register = function(socket) {
  Sensedata.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Sensedata.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('sensedata:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('sensedata:remove', doc);
}