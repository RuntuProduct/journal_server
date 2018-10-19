'use strict';
const TASK = require('../../database/definition/task');

module.exports = app => app.model.define('task', TASK.DB);
