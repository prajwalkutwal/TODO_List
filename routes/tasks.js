const express = require('express')
const router = express.Router()

const {    // other option was to const controller = require(../cont....  and then use router.get(route,action)
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  editTask,
} = require('../controllers/tasks')

// there are two routes on / when there is get req getalltasks and createTask for post request
router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router
