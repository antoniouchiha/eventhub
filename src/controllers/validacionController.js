// src/controllers/validacionController.js

const Validacion = require('../models/validacionModel');

const validacionController = {
  createValidacion: async (req, res) => {
    const { estado, comentarios } = req.body;
    try {
      const result = await Validacion.create(estado, comentarios);
      res.status(201).json({ message: 'Validación creada correctamente', validacion_id: result.insertId });
    } catch (error) {
      console.error('Error al crear validación:', error);
      res.status(500).json({ error: 'Error al crear validación' });
    }
  },

  getAllValidaciones: async (req, res) => {
    try {
      const validaciones = await Validacion.getAllValidaciones();
      res.json(validaciones);
    } catch (error) {
      console.error('Error al obtener validaciones:', error);
      res.status(500).json({ error: 'Error al obtener validaciones' });
    }
  },

  getValidacionById: async (req, res) => {
    const validacion_id = req.params.validacion_id;
    try {
      const validacion = await Validacion.getValidacionById(validacion_id);
      if (validacion.length === 0) {
        res.status(404).json({ error: 'Validación no encontrada' });
      } else {
        res.json(validacion[0]);
      }
    } catch (error) {
      console.error('Error al obtener validación por ID:', error);
      res.status(500).json({ error: 'Error al obtener validación por ID' });
    }
  },

  updateValidacion: async (req, res) => {
    const validacion_id = req.params.validacion_id;
    const { estado, comentarios } = req.body;
    try {
      await Validacion.updateValidacion(validacion_id, estado, comentarios);
      res.json({ message: 'Validación actualizada correctamente' });
    } catch (error) {
      console.error('Error al actualizar validación:', error);
      res.status(500).json({ error: 'Error al actualizar validación' });
    }
  },

  deleteValidacion: async (req, res) => {
    const validacion_id = req.params.validacion_id;
    try {
      await Validacion.deleteValidacion(validacion_id);
      res.json({ message: 'Validación eliminada correctamente' });
    } catch (error) {
      console.error('Error al eliminar validación:', error);
      res.status(500).json({ error: 'Error al eliminar validación' });
    }
  }
};

module.exports = validacionController;
