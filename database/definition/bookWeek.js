'use strict';

const { BIGINT, DATEONLY, TEXT, DATE } = require('Sequelize');

module.exports = {
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
  gmt_create: {
    type: DATE,
    allowNull: false,
  },
  gmt_modified: {
    type: DATE,
    allowNull: false,
  },
}
