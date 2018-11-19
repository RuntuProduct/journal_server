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
  outlay_year: {
    type: INTEGER,
    allowNull: false,
    defaultValue: 0,
  }, // 支出（年）
  outlay_month: {
    type: INTEGER,
    allowNull: false,
    defaultValue: 0,
  }, // 支出（月）
  outlay_week: {
    type: INTEGER,
    allowNull: false,
    defaultValue: 0,
  }, // 支出（周）
  outlay_day: {
    type: INTEGER,
    allowNull: false,
    defaultValue: 0,
  }, // 支出（日）
  income_year: {
    type: INTEGER,
    allowNull: false,
    defaultValue: 0,
  }, // 收入（年）
  income_month: {
    type: INTEGER,
    allowNull: false,
    defaultValue: 0,
  }, // 收入（月）
  income_week: {
    type: INTEGER,
    allowNull: false,
    defaultValue: 0,
  }, // 收入（周）
  income_day: {
    type: INTEGER,
    allowNull: false,
    defaultValue: 0,
  }, // 收入（日）
  tags_outlay: {
    type: CHAR,
  }, // 标签类（'1,2,3')
  tags_income: {
    type: CHAR,
  }, // 标签类（'1,2,3')
  ...base,
};
