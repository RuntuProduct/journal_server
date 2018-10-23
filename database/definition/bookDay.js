'use strict';
const base = require('./base')
const { UUID, UUIDV4, DATEONLY, TEXT } = require('Sequelize');

exports.DB = {
  id: {
    type: UUID,
    primaryKey: true,
    unique: true,
    allowNull: false,
    defaultValue: UUIDV4,
  },
  day: {
    type: DATEONLY,
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
  month_id: {
    type: UUID,
    allowNull: false,
  },
  note: {
    type: TEXT,
  },
  ...base,
}
