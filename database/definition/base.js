'use strict';
const { DATE, NOW } = require('Sequelize');

module.exports = {
  create_at: {
    type: DATE,
    defaultValue: NOW,
  },
  update_at: {
    type: DATE,
    defaultValue: NOW,
  },
  delete_at: {
    type: DATE,
  },
}
