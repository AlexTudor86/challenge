const express = require('express')
const { getAllUsers, getUser, createUser, deleteUser } = require('../controllers/users')

const router = express.Router()

router.route('/').get(getAllUsers).post(createUser)
router.route('/:id').get(getUser).delete(deleteUser)

module.exports = router