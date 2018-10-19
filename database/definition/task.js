'use strict';
const base = require('./base')
const { BIGINT, STRING, TEXT, ENUM } = require('Sequelize');

exports.DB = {
  id: {
    type: BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: STRING(40),
    allowNull: false,
  },
  description: {
    type: TEXT,
  },
  user_id: {
    type: BIGINT,
    allowNull: false,
  },
  t_type: {
    type: ENUM('day', 'week', 'month', 'year'),
    allowNull: false,
    defaultValue: 'day',
  },
  target_id: {
    type: BIGINT,
    allowNull: false,
  },
  completed: {
    type: ENUM('Y', 'N'),
    allowNull: false,
    defaultValue: 'Y',
  },
  ...base,
}
