const express = require('express')
const router = express.Router()


const prisonerController = require('../controllers/prisonerController')

// get all list of prisoners
router.get('/prisoners', prisonerController.prisoners)


module.exports = router;