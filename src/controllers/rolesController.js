// src/controllers/rolesController.js

const Rol = require('../models/rolModel');

const rolesController = {
  createRol: async (req, res) => {
    const { nombre } = req.body;
    try {
      const result = await Rol.create(nombre);
      res.status(201).json({ message: 'Rol creado correctamente', rol_id: result.insertId });
    } catch (error) {
      console.error('Error al crear rol:', error);
      res.status(500).json({ error: 'Error al crear rol' });
    }
  },

  getAllRoles: async (req, res) => {
    try {
      const roles = await Rol.getAllRoles();
      res.json(roles);
    } catch (error) {
      console.error('Error al obtener roles:', error);
      res.status(500).json({ error: 'Error al obtener roles' });
    }
  },

  getRolById: async (req, res) => {
    const rol_id = req.params.rol_id;
    try {
      const rol = await Rol.getRolById(rol_id);
      if (rol.length === 0) {
        res.status(404).json({ error: 'Rol no encontrado' });
      } else {
        res.json(rol[0]);
      }
    } catch (error) {
      console.error('Error al obtener rol por ID:', error);
      res.status(500).json({ error: 'Error al obtener rol por ID' });
    }
  },

  updateRol: async (req, res) => {
    const rol_id = req.params.rol_id;
    const { nombre } = req.body;
    try {
      await Rol.updateRol(rol_id, nombre);
      res.json({ message: 'Rol actualizado correctamente' });
    } catch (error) {
      console.error('Error al actualizar rol:', error);
      res.status(500).json({ error: 'Error al actualizar rol' });
    }
  },

  deleteRol: async (req, res) => {
    const rol_id = req.params.rol_id;
    try {
      await Rol.deleteRol(rol_id);
      res.json({ message: 'Rol eliminado correctamente' });
    } catch (error) {
      console.error('Error al eliminar rol:', error);
      res.status(500).json({ error: 'Error al eliminar rol' });
    }
  }
};

module.exports = rolesController;
