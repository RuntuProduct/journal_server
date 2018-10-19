'use strict';
const base = require('./base')
const { BIGINT, INTEGER, TEXT } = require('Sequelize');

exports.DB = {
  id: {
    type: BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  month: {
    type: INTEGER(2),
    allowNull: false,
  },
  user_id: {
    type: BIGINT,
    allowNull: false,
  },
  year_id: {
    type: BIGINT,
    allowNull: false,
  },
  note: {
    type: TEXT,
  },
  ...base,
}
