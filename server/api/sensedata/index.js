'use strict';

var express = require('express');
var controller = require('./sensedata.controller');

var router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getAllDataByUserId);
router.post('/', controller.create);
router.get('/:id/latest', controller.getLatestDataByUserId);
//router.put('/:id', controller.update);
//router.patch('/:id', controller.update);
//router.delete('/:id', controller.destroy);


module.exports = router;