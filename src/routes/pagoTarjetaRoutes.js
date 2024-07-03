// src/routes/pagoTarjetaRoutes.js

const express = require('express');
const router = express.Router();
const pagoTarjetaController = require('../controllers/pagoTarjetaController');

// Rutas para Pago con Tarjeta
router.post('/', pagoTarjetaController.createPagoTarjeta);
router.get('/', pagoTarjetaController.getAllPagosTarjeta); // Nueva ruta para obtener todos los pagos con tarjeta
router.get('/:pago_id', pagoTarjetaController.getPagoTarjetaByPagoId);
router.put('/:tarjeta_id', pagoTarjetaController.updatePagoTarjeta);
router.delete('/:pago_id', pagoTarjetaController.deletePagoTarjetaByPagoId);

module.exports = router;
