'use strict';
const { DATE, NOW } = require('Sequelize');

module.exports = {
  created_at: {
    type: DATE,
    defaultValue: NOW,
  },
  updated_at: {
    type: DATE,
    defaultValue: NOW,
  },
  deleted_at: {
    type: DATE,
  },
}
