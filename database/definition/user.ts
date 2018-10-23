'use strict';
import { STRING, UUID, UUIDV4 } from 'sequelize';
import base from './base';

export const DB = {
  id: {
    type: UUID,
    primaryKey: true,
    unique: true,
    allowNull: false,
    defaultValue: UUIDV4,
  },
  account: {
    type: STRING(30),
    allowNull: false,
  },
  password: {
    type: STRING(30),
    allowNull: false,
  },
  username: STRING(30),
  ...base,
};

// exports.SEED = [
//   {
//     account: 'admin',
//     password: '123456',
//     username: 'runtu',
//   },
// ]
