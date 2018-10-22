'use strict';
const SE_BOOK_Month = require('../../database/definition/bookMonth');

module.exports = app => app.model.define('book_month', SE_BOOK_Month.DB);
