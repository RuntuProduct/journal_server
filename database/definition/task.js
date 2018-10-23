'use strict';
const base = require('./base')
const { UUID, UUIDV4, STRING, TEXT, ENUM } = require('Sequelize');

exports.DB = {
  id: {
    type: UUID,
    primaryKey: true,
    unique: true,
    allowNull: false,
    defaultValue: UUIDV4,
  },
  title: {
    type: STRING(40),
    allowNull: false,
  },
  description: {
    type: TEXT,
  },
  user_id: {
    type: UUID,
    allowNull: false,
  },
  t_type: {
    type: ENUM('day', 'week', 'month', 'year'),
    allowNull: false,
    defaultValue: 'day',
  },
  target_id: {
    type: UUID,
    allowNull: false,
  },
  completed: {
    type: ENUM('Y', 'N'),
    allowNull: false,
    defaultValue: 'Y',
  },
  ...base,
}
