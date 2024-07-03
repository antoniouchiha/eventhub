// src/routes/categoriasRoutes.js

const express = require('express');
const router = express.Router();
const categoriasController = require('../controllers/categoriasController');

router.post('/', categoriasController.createCategoria);
router.get('/', categoriasController.getAllCategorias);
router.get('/:categoria_id', categoriasController.getCategoriaById);
router.put('/:categoria_id', categoriasController.updateCategoria);
router.delete('/:categoria_id', categoriasController.deleteCategoria);

module.exports = router;
