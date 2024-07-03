// src/controllers/detallesEventoController.js

const DetallesEvento = require('../models/detallesEventoModel');

const detallesEventoController = {
  createDetalleEvento: async (req, res) => {
    const { evento_id, descripcion, requerimientos } = req.body;
    try {
      const result = await DetallesEvento.create(evento_id, descripcion, requerimientos);
      res.status(201).json({ message: 'Detalle de evento creado correctamente', detalle_evento_id: result.insertId });
    } catch (error) {
      console.error('Error al crear detalle de evento:', error);
      res.status(500).json({ error: 'Error al crear detalle de evento' });
    }
  },

  getAllDetallesEvento: async (req, res) => {
    try {
      const detallesEvento = await DetallesEvento.getAllDetallesEvento();
      res.json(detallesEvento);
    } catch (error) {
      console.error('Error al obtener detalles de evento:', error);
      res.status(500).json({ error: 'Error al obtener detalles de evento' });
    }
  },

  getDetalleEventoById: async (req, res) => {
    const detalle_evento_id = req.params.detalle_evento_id;
    try {
      const detalleEvento = await DetallesEvento.getDetalleEventoById(detalle_evento_id);
      if (detalleEvento.length === 0) {
        res.status(404).json({ error: 'Detalle de evento no encontrado' });
      } else {
        res.json(detalleEvento[0]);
      }
    } catch (error) {
      console.error('Error al obtener detalle de evento por ID:', error);
      res.status(500).json({ error: 'Error al obtener detalle de evento por ID' });
    }
  },

  getDetallesEventoByEventoId: async (req, res) => {
    const evento_id = req.params.evento_id;
    try {
      const detallesEvento = await DetallesEvento.getDetallesEventoByEventoId(evento_id);
      res.json(detallesEvento);
    } catch (error) {
      console.error('Error al obtener detalles de evento por Evento ID:', error);
      res.status(500).json({ error: 'Error al obtener detalles de evento por Evento ID' });
    }
  },

  updateDetalleEvento: async (req, res) => {
    const detalle_evento_id = req.params.detalle_evento_id;
    const { descripcion, requerimientos } = req.body;
    try {
      await DetallesEvento.updateDetalleEvento(detalle_evento_id, descripcion, requerimientos);
      res.json({ message: 'Detalle de evento actualizado correctamente' });
    } catch (error) {
      console.error('Error al actualizar detalle de evento:', error);
      res.status(500).json({ error: 'Error al actualizar detalle de evento' });
    }
  },

  deleteDetalleEvento: async (req, res) => {
    const detalle_evento_id = req.params.detalle_evento_id;
    try {
      await DetallesEvento.deleteDetalleEvento(detalle_evento_id);
      res.json({ message: 'Detalle de evento eliminado correctamente' });
    } catch (error) {
      console.error('Error al eliminar detalle de evento:', error);
      res.status(500).json({ error: 'Error al eliminar detalle de evento' });
    }
  }
};

module.exports = detallesEventoController;
