const express = require('express')
const router = express.Router()


const guardController = require('../controllers/guardController')

router.get('/guards', guardController.guards)

router.get('/guards/:id', guardController.guard)

router.get('/search/guard', guardController.searchGuard)

router.get('/delete/guard/:id', guardController.deleteGuard)

module.exports = router;