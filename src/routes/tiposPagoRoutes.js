// src/routes/tiposPagoRoutes.js

const express = require('express');
const router = express.Router();
const tiposPagoController = require('../controllers/tiposPagoController');

router.post('/', tiposPagoController.createTipoPago);
router.get('/', tiposPagoController.getAllTiposPago);
router.get('/:tipo_pago_id', tiposPagoController.getTipoPagoById);
router.put('/:tipo_pago_id', tiposPagoController.updateTipoPago);
router.delete('/:tipo_pago_id', tiposPagoController.deleteTipoPago);

module.exports = router;
