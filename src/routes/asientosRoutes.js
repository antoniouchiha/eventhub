const express = require('express');
const router = express.Router();
const asientosController = require('../controllers/asientosController');

router.post('/', asientosController.createAsiento);
router.get('/', asientosController.getAllAsientos);
router.get('/:asiento_id', asientosController.getAsientoById);
router.put('/:asiento_id', asientosController.updateAsiento);
router.delete('/:asiento_id', asientosController.deleteAsiento);

module.exports = router;
