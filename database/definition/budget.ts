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
  year_id: {
    type: UUID,
    allowNull: false,
  },
  outlay: {
    type: INTEGER,
    allowNull: false,
    defaultValue: 0,
  }, // 支出
  income: {
    type: INTEGER,
    allowNull: false,
    defaultValue: 0,
  }, // 收入
  tags_outlay: {
    type: CHAR,
  }, // 标签类（'1,2,3')
  tags_income: {
    type: CHAR,
  }, // 标签类（'1,2,3')
  ...base,
};
