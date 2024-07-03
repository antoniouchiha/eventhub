// src/routes/permisosRoutes.js

const express = require('express');
const router = express.Router();
const permisosController = require('../controllers/permisosController');

// Rutas para los permisos
router.post('/', permisosController.createPermiso);
router.get('/', permisosController.getAllPermisos);
router.get('/:permiso_id', permisosController.getPermisoById);
router.put('/:permiso_id', permisosController.updatePermiso);
router.delete('/:permiso_id', permisosController.deletePermiso);

module.exports = router;
