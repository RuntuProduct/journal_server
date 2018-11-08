'use strict';
import { DATEONLY, TEXT, UUID, UUIDV4 } from 'sequelize';
import base from './base';

export const DB = {
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
  note: {
    type: TEXT,
  },
  ...base,
};
