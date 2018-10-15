'use strict';

module.exports = app => {
  const { BIGINT, STRING, DATE } = app.Sequelize;

  const User = app.model.define('user', {
    id: {
      type: BIGINT,
      primaryKey: true,
      autoIncrement: true,
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
    gmt_create: {
      type: DATE,
      allowNull: false,
    },
    gmt_modified: {
      type: DATE,
      allowNull: false,
    },
  });

  return User;
};
