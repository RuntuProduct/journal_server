'use strict';

const db_user = require('../../database/definition/user');

module.exports = app => {
  const User = app.model.define('user', db_user);

  return User;
};
