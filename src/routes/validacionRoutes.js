// src/routes/validacionRoutes.js

const express = require('express');
const router = express.Router();
const validacionController = require('../controllers/validacionController');

router.post('/', validacionController.createValidacion);
router.get('/', validacionController.getAllValidaciones);
router.get('/:validacion_id', validacionController.getValidacionById);
router.put('/:validacion_id', validacionController.updateValidacion);
router.delete('/:validacion_id', validacionController.deleteValidacion);

module.exports = router;
