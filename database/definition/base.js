'use strict';
const { DATE, NOW } = require('Sequelize');

module.exports = {
  created_at: {
    type: DATE,
    allowNull: false,
    defaultValue: NOW,
  },
  updated_at: {
    type: DATE,
    allowNull: false,
    defaultValue: NOW,
  },
  deleted_at: {
    type: DATE,
  },
}
