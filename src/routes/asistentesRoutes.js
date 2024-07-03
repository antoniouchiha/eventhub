// src/routes/asistentesRoutes.js

const express = require('express');
const router = express.Router();
const asistentesController = require('../controllers/asistentesController');

router.post('/', asistentesController.createAsistente);
router.get('/', asistentesController.getAllAsistentes);
router.get('/:asistente_id', asistentesController.getAsistenteById);
router.put('/:asistente_id', asistentesController.updateAsistente);
router.delete('/:asistente_id', asistentesController.deleteAsistente);

module.exports = router;
