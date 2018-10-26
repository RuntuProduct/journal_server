'use strict';

const USER = require('../definition/user')
const TASK = require('../definition/task')
const BOOK_YEAR = require('../definition/bookYear')
const BOOK_MONTH = require('../definition/bookMonth')
const BOOK_WEEK = require('../definition/bookWeek')
const BOOK_DAY = require('../definition/bookDay')
const BUDGET = require('../definition/budget')
const BUDGET_TAG = require('../definition/budgetTag')

module.exports = {
  up: async (queryInterface, Sequelize, done) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    await queryInterface.createTable('user', USER.DB);
    await queryInterface.createTable('task', TASK.DB);
    await queryInterface.createTable('book_year', BOOK_YEAR.DB);
    await queryInterface.createTable('book_month', BOOK_MONTH.DB);
    await queryInterface.createTable('book_week', BOOK_WEEK.DB);
    await queryInterface.createTable('book_day', BOOK_DAY.DB);
    await queryInterface.createTable('budget', BUDGET.DB);
    await queryInterface.createTable('budget_tag', BUDGET_TAG.DB);
    done();
  },

  down: async (queryInterface, Sequelize, done) => {
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
    await queryInterface.dropTable('budget');
    await queryInterface.dropTable('budget_tag');
    done();
  }
};
