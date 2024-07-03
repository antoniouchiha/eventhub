const express = require('express');
const router = express.Router();
const imagenesController = require('../controllers/imagenesController');

router.post('/', imagenesController.createImagen);
router.get('/', imagenesController.getAllImagenes);
router.get('/:imagen_id', imagenesController.getImagenById);
router.put('/:imagen_id', imagenesController.updateImagen);
router.delete('/:imagen_id', imagenesController.deleteImagen);

module.exports = router;
