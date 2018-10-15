'use strict';

const { BIGINT, STRING, TEXT, ENUM, DATE } = require('Sequelize');

module.exports = {
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
    allowNull: falsse,
  },
  completed: {
    type: ENUM('Y', 'N'),
    allowNull: false,
    defaultValue: 'Y',
  },
  gmt_create: {
    type: DATE,
    allowNull: false,
  },
  gmt_modified: {
    type: DATE,
    allowNull: false,
  },
}
