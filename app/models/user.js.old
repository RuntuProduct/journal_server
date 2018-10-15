const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  account: { type: String, required: true }, // 登录账号
  password: { type: String, require: true }, // 登录密码
  username: { type: String, required: true }, // 用户名
}, { collection: 'user' })

module.exports = mongoose.model('User', UserSchema)
