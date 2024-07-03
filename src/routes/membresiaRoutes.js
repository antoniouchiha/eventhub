const express = require('express');
const router = express.Router();
const membresiaController = require('../controllers/membresiaController');

// Rutas para membresías
router.post('/', membresiaController.createMembresia);
router.get('/:membresia_id', membresiaController.getMembresiaById);
router.get('/', membresiaController.getAllMembresias);
router.put('/:membresia_id', membresiaController.updateMembresia);
router.delete('/:membresia_id', membresiaController.deleteMembresia);

module.exports = router;
