/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var path = require('path');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/sensedata', require('./api/sensedata'));
  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));
  app.use('/api/login', require('./api/login'));
  app.use('/auth', require('./auth'));
  //app.use('/sensedata', require('./sensedata'));
  
  app.route('/sensedata/:url([A-Za-z0-9]{1,23}|[A-Za-z0-9]{25,})')
    .get(function (req, res){
      console.log('no: /sensedata/')
      return res.redirect('/sensedata/');
  });

  app.route('/sensedata/:url([A-Za-z0-9]+)')
  .get(function (req, res){
    console.log('yes: /sensedata/' + req.params.url)
    return res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
  });

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function (req, res) {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
};
