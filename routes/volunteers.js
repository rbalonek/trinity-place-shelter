const { Router } = require('express')
const controllers = require('../controllers/volunteers')

const router = Router()

router.get('/volunteers', controllers.getVolunteers)
router.get('/volunteers/:id', controllers.getVolunteer)
router.post('/volunteers', controllers.createVolunteer)
router.put('/volunteers/:id', controllers.updateVolunteer)
router.delete('/volunteers/:id', controllers.deleteVolunteer)

module.exports = router
