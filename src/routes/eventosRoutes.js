// src/routes/eventosRoutes.js

const express = require('express');
const router = express.Router();
const eventosController = require('../controllers/eventosController');

router.post('/', eventosController.createEvento);
router.get('/', eventosController.getAllEventos);
router.get('/:evento_id', eventosController.getEventoById);
router.put('/:evento_id', eventosController.updateEvento);
router.delete('/:evento_id', eventosController.deleteEvento);

module.exports = router;
