// src/routes/rolesPermisosRoutes.js

const express = require('express');
const router = express.Router();
const rolesPermisosController = require('../controllers/rolesPermisosController');

router.post('/', rolesPermisosController.createRolesPermisos);
router.get('/', rolesPermisosController.getAllRolesPermisos);
router.get('/rol/:rol_id', rolesPermisosController.getRolesPermisosByRolId);
router.get('/permiso/:permiso_id', rolesPermisosController.getRolesPermisosByPermisoId);
router.delete('/', rolesPermisosController.deleteRolesPermisos);

module.exports = router;
