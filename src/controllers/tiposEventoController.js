// src/controllers/tiposEventoController.js

const TipoEvento = require('../models/tiposEventoModel');

const tiposEventoController = {
  createTipoEvento: async (req, res) => {
    const { nombre } = req.body;
    try {
      const result = await TipoEvento.create(nombre);
      res.status(201).json({ message: 'Tipo de evento creado correctamente', tipo_evento_id: result.insertId });
    } catch (error) {
      console.error('Error al crear tipo de evento:', error);
      res.status(500).json({ error: 'Error al crear tipo de evento' });
    }
  },

  getAllTiposEvento: async (req, res) => {
    try {
      const tiposEvento = await TipoEvento.getAllTiposEvento();
      res.json(tiposEvento);
    } catch (error) {
      console.error('Error al obtener tipos de evento:', error);
      res.status(500).json({ error: 'Error al obtener tipos de evento' });
    }
  },

  getTipoEventoById: async (req, res) => {
    const tipo_evento_id = req.params.tipo_evento_id;
    try {
      const tipoEvento = await TipoEvento.getTipoEventoById(tipo_evento_id);
      if (tipoEvento.length === 0) {
        res.status(404).json({ error: 'Tipo de evento no encontrado' });
      } else {
        res.json(tipoEvento[0]);
      }
    } catch (error) {
      console.error('Error al obtener tipo de evento por ID:', error);
      res.status(500).json({ error: 'Error al obtener tipo de evento por ID' });
    }
  },

  updateTipoEvento: async (req, res) => {
    const tipo_evento_id = req.params.tipo_evento_id;
    const { nombre } = req.body;
    try {
      await TipoEvento.updateTipoEvento(tipo_evento_id, nombre);
      res.json({ message: 'Tipo de evento actualizado correctamente' });
    } catch (error) {
      console.error('Error al actualizar tipo de evento:', error);
      res.status(500).json({ error: 'Error al actualizar tipo de evento' });
    }
  },

  deleteTipoEvento: async (req, res) => {
    const tipo_evento_id = req.params.tipo_evento_id;
    try {
      await TipoEvento.deleteTipoEvento(tipo_evento_id);
      res.json({ message: 'Tipo de evento eliminado correctamente' });
    } catch (error) {
      console.error('Error al eliminar tipo de evento:', error);
      res.status(500).json({ error: 'Error al eliminar tipo de evento' });
    }
  }
};

module.exports = tiposEventoController;
