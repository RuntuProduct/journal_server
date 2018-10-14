const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookDaySchema = new Schema({
  day: {
    type: Date,
    required: true,
  }, // 日期
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  }, // 所属用户id
  weekId: {
    type: Schema.Types.ObjectId,
    required: true,
  }, // 所属周Id
  note: {
    type: String,
    default: '',
  }, // 笔记
  task: [Schema.Types.ObjectId], // 任务列表
}, { collection: 'book_day' })

module.exports = mongoose.model('BookDay', BookDaySchema)
