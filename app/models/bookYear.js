const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookYearSchema = new Schema({
  year: {
    type: Number,
    required: true,
  }, // 年份
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  }, // 所属用户id
  note: {
    type: String,
    default: '',
  }, // 笔记
  task: [Schema.Types.ObjectId], // 任务列表
}, { collection: 'book_year' })

module.exports = mongoose.model('BookYear', BookYearSchema)
