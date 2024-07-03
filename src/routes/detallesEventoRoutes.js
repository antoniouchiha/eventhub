// src/routes/detallesEventoRoutes.js

const express = require('express');
const router = express.Router();
const detallesEventoController = require('../controllers/detallesEventoController');

router.post('/', detallesEventoController.createDetalleEvento);
router.get('/', detallesEventoController.getAllDetallesEvento);
router.get('/:detalle_evento_id', detallesEventoController.getDetalleEventoById);
router.get('/evento/:evento_id', detallesEventoController.getDetallesEventoByEventoId);
router.put('/:detalle_evento_id', detallesEventoController.updateDetalleEvento);
router.delete('/:detalle_evento_id', detallesEventoController.deleteDetalleEvento);

module.exports = router;
