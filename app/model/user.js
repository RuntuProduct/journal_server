'use strict';
const USER = require('../../database/definition/user');

module.exports = app => app.model.define('user', USER.DB);
