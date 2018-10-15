'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    const { BIGINT, STRING, DATE } = Sequelize;
    await queryInterface.createTable('user', {
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
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    await queryInterface.dropTable('user');
  }
};
