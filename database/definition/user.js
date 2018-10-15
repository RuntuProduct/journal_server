'use strict';

const { BIGINT, STRING, DATE } = require('Sequelize');

module.exports = {
  id: {
    type: BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  account: {
    type: STRING(30),
    allowNull: false,
  },
  password: {
    type: STRING(30),
    allowNull: false,
  },
  username: STRING(30),
  gmt_create: {
    type: DATE,
    allowNull: false,
  },
  gmt_modified: {
    type: DATE,
    allowNull: false,
  },
}
