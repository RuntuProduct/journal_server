'use strict';
const SE_BOOK_YEAR = require('../../database/definition/bookYear');

module.exports = app => app.model.define('book_year', SE_BOOK_YEAR.DB);
