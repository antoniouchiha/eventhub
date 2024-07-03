const express = require('express');
const router = express.Router();
const escenarioController = require('../controllers/escenarioController');

// Rutas para los escenarios
router.post('/', escenarioController.createEscenario);
router.get('/', escenarioController.getAllEscenarios);
router.get('/:escenario_id', escenarioController.getEscenarioById);
router.put('/:escenario_id', escenarioController.updateEscenario);
router.delete('/:escenario_id', escenarioController.deleteEscenario);

module.exports = router;
