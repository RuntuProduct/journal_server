'use strict';

const USER = require('../definition/user')

module.exports = {
  up: async (queryInterface, Sequelize, done) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    await queryInterface.bulkInsert('user', USER.SEED);
    done();
  },

  down: async (queryInterface, Sequelize, done) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    await queryInterface.bulkDelete('user', null, {});
    done();
  }
};
