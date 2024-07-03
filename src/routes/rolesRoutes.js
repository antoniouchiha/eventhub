// src/routes/rolesRoutes.js

const express = require('express');
const router = express.Router();
const rolesController = require('../controllers/rolesController');

// Rutas para los roles
router.post('/', rolesController.createRol);
router.get('/', rolesController.getAllRoles);
router.get('/:rol_id', rolesController.getRolById);
router.put('/:rol_id', rolesController.updateRol);
router.delete('/:rol_id', rolesController.deleteRol);

module.exports = router;
