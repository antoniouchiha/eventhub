// src/controllers/rolesPermisosController.js

const RolesPermisos = require('../models/rolesPermisosModel');

const rolesPermisosController = {
  createRolesPermisos: async (req, res) => {
    const { rol_id, permiso_id } = req.body;
    try {
      const result = await RolesPermisos.create(rol_id, permiso_id);
      res.status(201).json({ message: 'Rol-Permiso creado correctamente', id: result.insertId });
    } catch (error) {
      console.error('Error al crear rol-permiso:', error);
      res.status(500).json({ error: 'Error al crear rol-permiso' });
    }
  },

  getAllRolesPermisos: async (req, res) => {
    try {
      const rolesPermisos = await RolesPermisos.getAllRolesPermisos();
      res.json(rolesPermisos);
    } catch (error) {
      console.error('Error al obtener roles-permisos:', error);
      res.status(500).json({ error: 'Error al obtener roles-permisos' });
    }
  },

  getRolesPermisosByRolId: async (req, res) => {
    const rol_id = req.params.rol_id;
    try {
      const rolesPermisos = await RolesPermisos.getRolesPermisosByRolId(rol_id);
      if (rolesPermisos.length === 0) {
        res.status(404).json({ error: 'Rol-Permiso no encontrado' });
      } else {
        res.json(rolesPermisos);
      }
    } catch (error) {
      console.error('Error al obtener rol-permiso por Rol ID:', error);
      res.status(500).json({ error: 'Error al obtener rol-permiso por Rol ID' });
    }
  },

  getRolesPermisosByPermisoId: async (req, res) => {
    const permiso_id = req.params.permiso_id;
    try {
      const rolesPermisos = await RolesPermisos.getRolesPermisosByPermisoId(permiso_id);
      if (rolesPermisos.length === 0) {
        res.status(404).json({ error: 'Rol-Permiso no encontrado' });
      } else {
        res.json(rolesPermisos);
      }
    } catch (error) {
      console.error('Error al obtener rol-permiso por Permiso ID:', error);
      res.status(500).json({ error: 'Error al obtener rol-permiso por Permiso ID' });
    }
  },

  deleteRolesPermisos: async (req, res) => {
    const { rol_id, permiso_id } = req.body;
    try {
      await RolesPermisos.deleteRolesPermisos(rol_id, permiso_id);
      res.json({ message: 'Rol-Permiso eliminado correctamente' });
    } catch (error) {
      console.error('Error al eliminar rol-permiso:', error);
      res.status(500).json({ error: 'Error al eliminar rol-permiso' });
    }
  }
};

module.exports = rolesPermisosController;
