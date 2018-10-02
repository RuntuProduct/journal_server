const express = require('express')
const router = express.Router()
const { dealRes, dealError } = require('../utils/dealWrap')
const User = require('../models/user')

// 获取详情
router.get('/', (req, res) => {
  const { userId } = req.query
  User.findById(userId).exec()
    .then(data => {
      if (!data) {
        dealRes(res, 204, 'user not exist')
      } else {
        dealRes(res, 200, data)
      }
    })
    .catch(e => dealError(res, e))
})

// 登录
router.post('/', (req, res) => {
  const { account, password  } = req.body
  User.find({ account, password }, ['username'])
    .then(data => dealRes(res, 200, data[0]))
    .catch(e => dealError(res, e))
})

module.exports = router
