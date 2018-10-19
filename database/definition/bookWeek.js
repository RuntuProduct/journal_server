'use strict';
const base = require('./base')
const { BIGINT, DATEONLY, TEXT } = require('Sequelize');

exports.DB = {
  id: {
    type: BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  day: {
    type: DATEONLY,
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
