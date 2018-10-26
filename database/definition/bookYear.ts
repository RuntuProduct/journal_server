'use strict';
import { INTEGER, TEXT, UUID, UUIDV4 } from 'sequelize';
import base from './base';

export const DB = {
  id: {
    type: UUID,
    primaryKey: true,
    unique: true,
    allowNull: false,
    defaultValue: UUIDV4,
  },
  year: {
    type: INTEGER(4),
    allowNull: false,
  },
  user_id: {
    type: UUID,
    allowNull: false,
  },
  note: {
    type: TEXT,
  },
  ...base,
};
