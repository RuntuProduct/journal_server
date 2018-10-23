'use strict';
const base = require('./base')
const { UUID, UUIDV4, INTEGER, TEXT } = require('Sequelize');

exports.DB = {
  id: {
    type: UUID,
    primaryKey: true,
    unique: true,
    allowNull: false,
    defaultValue: UUIDV4,
  },
  year: {
    type: INTEGER(4),
    allowNull: false,
  },
  user_id: {
    type: UUID,
    allowNull: false,
  },
  note: {
    type: TEXT,
  },
  ...base,
}
