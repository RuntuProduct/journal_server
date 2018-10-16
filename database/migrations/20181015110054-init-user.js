'use strict';

const db_user = require('../definition/user')
const db_task = require('../definition/task')
const db_book_year = require('../definition/bookYear')
const db_book_month = require('../definition/bookMonth')
const db_book_week = require('../definition/bookWeek')
const db_book_day = require('../definition/bookDay')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    const { BIGINT, STRING, DATE } = Sequelize;
    await queryInterface.createTable('user', db_user)
    await queryInterface.createTable('task', db_task)
    await queryInterface.createTable('book_year', db_book_year)
    await queryInterface.createTable('book_month', db_book_month)
    await queryInterface.createTable('book_week', db_book_week)
    await queryInterface.createTable('book_day', db_book_day)
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    await queryInterface.dropTable('user');
    await queryInterface.dropTable('task');
    await queryInterface.dropTable('book_year');
    await queryInterface.dropTable('book_month');
    await queryInterface.dropTable('book_week');
    await queryInterface.dropTable('book_day');
  }
};
