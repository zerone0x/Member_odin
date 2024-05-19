const express = require('express')
const router = express.Router()
const { getAllUsersStatic } = require('../controllers/users')

router.route('/').get(getAllUsersStatic)

module.exports = router