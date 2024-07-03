// src/controllers/permisosController.js

const Permiso = require('../models/permisosModel');

const permisosController = {
  createPermiso: async (req, res) => {
    const { nombre } = req.body;
    try {
      const result = await Permiso.create(nombre);
      res.status(201).json({ message: 'Permiso creado correctamente', permiso_id: result.insertId });
    } catch (error) {
      console.error('Error al crear permiso:', error);
      res.status(500).json({ error: 'Error al crear permiso' });
    }
  },

  getAllPermisos: async (req, res) => {
    try {
      const permisos = await Permiso.getAllPermisos();
      res.json(permisos);
    } catch (error) {
      console.error('Error al obtener permisos:', error);
      res.status(500).json({ error: 'Error al obtener permisos' });
    }
  },

  getPermisoById: async (req, res) => {
    const permiso_id = req.params.permiso_id;
    try {
      const permiso = await Permiso.getPermisoById(permiso_id);
      if (permiso.length === 0) {
        res.status(404).json({ error: 'Permiso no encontrado' });
      } else {
        res.json(permiso[0]);
      }
    } catch (error) {
      console.error('Error al obtener permiso por ID:', error);
      res.status(500).json({ error: 'Error al obtener permiso por ID' });
    }
  },

  updatePermiso: async (req, res) => {
    const permiso_id = req.params.permiso_id;
    const { nombre } = req.body;
    try {
      await Permiso.updatePermiso(permiso_id, nombre);
      res.json({ message: 'Permiso actualizado correctamente' });
    } catch (error) {
      console.error('Error al actualizar permiso:', error);
      res.status(500).json({ error: 'Error al actualizar permiso' });
    }
  },

  deletePermiso: async (req, res) => {
    const permiso_id = req.params.permiso_id;
    try {
      await Permiso.deletePermiso(permiso_id);
      res.json({ message: 'Permiso eliminado correctamente' });
    } catch (error) {
      console.error('Error al eliminar permiso:', error);
      res.status(500).json({ error: 'Error al eliminar permiso' });
    }
  }
};

module.exports = permisosController;
