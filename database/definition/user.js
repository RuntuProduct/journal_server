'use strict';
const base = require('./base');
const { BIGINT, STRING } = require('Sequelize');

exports.DB = {
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
  ...base,
}

exports.SEED = [
  {
    account: 'admin',
    password: '123456',
    username: 'runtu',
    created_at: new Date(),
    updated_at: new Date(),
  },
]