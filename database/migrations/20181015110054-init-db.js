'use strict';

const USER = require('../definition/user')
const TASK = require('../definition/task')
const RECORD_YEAR = require('../definition/recordYear')
const RECORD_MONTH = require('../definition/recordMonth')
const RECORD_WEEK = require('../definition/recordWeek')
const RECORD_DAY = require('../definition/recordDay')
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
    await queryInterface.createTable('record_year', RECORD_YEAR.DB);
    await queryInterface.createTable('record_month', RECORD_MONTH.DB);
    await queryInterface.createTable('record_week', RECORD_WEEK.DB);
    await queryInterface.createTable('record_day', RECORD_DAY.DB);
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
    await queryInterface.dropTable('record_year');
    await queryInterface.dropTable('record_month');
    await queryInterface.dropTable('record_week');
    await queryInterface.dropTable('record_day');
    await queryInterface.dropTable('budget');
    await queryInterface.dropTable('budget_tag');
    done();
  }
};
