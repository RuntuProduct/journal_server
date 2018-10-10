const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TaskSchema = new Schema({
  title: {
    type: String,
    required: true,
  }, // 待办标题
  desc: {
    type: String,
    required: true,
  }, // 待办描述
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  }, // 所属用户id
  type: {
    type: String,
    required: true,
    enum: ['year', 'month', 'week', 'day'],
  }, // 任务类型
  createDate: {
    type: Date,
    required: true,
  }, // 创建日期
  updateDate: {
    type: Date,
  }, // 修改日期
}, { collection: 'task' })

module.exports = mongoose.model('Task', TaskSchema)
