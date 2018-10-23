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
  month: {
    type: INTEGER(2),
    allowNull: false,
  },
  user_id: {
    type: UUID,
    allowNull: false,
  },
  year_id: {
    type: UUID,
    allowNull: false,
  },
  note: {
    type: TEXT,
  },
  ...base,
}
