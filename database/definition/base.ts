'use strict';
import { DATE, NOW } from 'sequelize';

export default {
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
};
