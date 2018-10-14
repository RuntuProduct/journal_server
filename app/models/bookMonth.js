const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookMonthSchema = new Schema({
  month: {
    type: Number,
    required: true,
  }, // 月份
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  }, // 所属用户id
  yearId: {
    type: Schema.Types.ObjectId,
    required: true,
  }, // 所属年份Id
  note: {
    type: String,
    default: '',
  }, // 笔记
  task: [Schema.Types.ObjectId], // 任务列表
}, { collection: 'book_month' })

module.exports = mongoose.model('BookMonth', BookMonthSchema)
