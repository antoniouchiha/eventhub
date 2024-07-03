const express = require('express');
const router = express.Router();
const comentarioController = require('../controllers/comentarioController');

// Rutas para los comentarios
router.post('/', comentarioController.createComentario);
router.get('/', comentarioController.getAllComentarios);
router.get('/:comentario_id', comentarioController.getComentarioById);
router.put('/:comentario_id', comentarioController.updateComentario);
router.delete('/:comentario_id', comentarioController.deleteComentario);

module.exports = router;
