const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookWeekSchema = new Schema({
  startDay: {
    type: Number,
    required: true,
  }, // 周开始日（周日或者周一，这里默认用周一）
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  }, // 所属用户id
  monthId: {
    type: Schema.Types.ObjectId,
    required: true,
  }, // 所属月份Id
  note: {
    type: String,
    default: '',
  }, // 笔记
  task: [Schema.Types.ObjectId], // 任务列表
}, { collection: 'book_week' })

module.exports = mongoose.model('BookWeek', BookWeekSchema)
