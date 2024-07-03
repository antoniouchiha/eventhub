const express = require('express');
const router = express.Router();
const comentariosController = require('../controllers/comentariosController');

router.post('/', comentariosController.createComentario);
router.get('/', comentariosController.getAllComentarios);
router.get('/:comentario_id', comentariosController.getComentarioById);
router.put('/:comentario_id', comentariosController.updateComentario);
router.delete('/:comentario_id', comentariosController.deleteComentario);

module.exports = router;
