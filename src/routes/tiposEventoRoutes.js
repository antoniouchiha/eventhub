// src/routes/tiposEventoRoutes.js

const express = require('express');
const router = express.Router();
const tiposEventoController = require('../controllers/tiposEventoController');

router.post('/', tiposEventoController.createTipoEvento);
router.get('/', tiposEventoController.getAllTiposEvento);
router.get('/:tipo_evento_id', tiposEventoController.getTipoEventoById);
router.put('/:tipo_evento_id', tiposEventoController.updateTipoEvento);
router.delete('/:tipo_evento_id', tiposEventoController.deleteTipoEvento);

module.exports = router;
