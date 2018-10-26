import { CHAR, INTEGER, UUID, UUIDV4 } from 'sequelize';
import base from './base';

export const DB = {
  id: {
    type: UUID,
    primaryKey: true,
    unique: true,
    allowNull: false,
    defaultValue: UUIDV4,
  },
  total: {
    type: INTEGER,
    allowNull: false,
    defaultValue: 0,
  }, // 总量
  tags: {
    type: CHAR,
  }, // 标签类（'1,2,3')
  ...base,
};
