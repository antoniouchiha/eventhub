// src/routes/usuariosRoutes.js

const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

router.post('/', usuariosController.createUsuario);
router.get('/', usuariosController.getAllUsuarios);
router.get('/:usuario_id', usuariosController.getUsuarioById);
router.put('/:usuario_id', usuariosController.updateUsuario);
router.delete('/:usuario_id', usuariosController.deleteUsuario);

module.exports = router;
