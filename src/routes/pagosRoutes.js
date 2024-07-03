const express = require('express');
const router = express.Router();
const pagosController = require('../controllers/pagosController');

// Rutas para Pagos
router.post('/', pagosController.createPago);
router.get('/', pagosController.getAllPagos);
router.get('/:pago_id', pagosController.getPagoById);
router.put('/:pago_id', pagosController.updatePago);
router.delete('/:pago_id', pagosController.deletePago);

module.exports = router;
