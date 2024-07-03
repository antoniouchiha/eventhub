// src/controllers/eventosController.js

const Evento = require('../models/eventoModel');

const eventosController = {
  createEvento: async (req, res) => {
    const { nombre, fecha_inicio, fecha_termino, hora, tipo_evento_id, organizador_id, categoria_id, ubicacion, max_per, estado, autorizado_por, fecha_autorizacion } = req.body;
    try {
      const result = await Evento.create(nombre, fecha_inicio, fecha_termino, hora, tipo_evento_id, organizador_id, categoria_id, ubicacion, max_per, estado, autorizado_por, fecha_autorizacion);
      res.status(201).json({ message: 'Evento creado correctamente', evento_id: result.insertId });
    } catch (error) {
      console.error('Error al crear evento:', error);
      res.status(500).json({ error: 'Error al crear evento' });
    }
  },

  getAllEventos: async (req, res) => {
    try {
      const eventos = await Evento.getAllEventos();
      res.json(eventos);
    } catch (error) {
      console.error('Error al obtener eventos:', error);
      res.status(500).json({ error: 'Error al obtener eventos' });
    }
  },

  getEventoById: async (req, res) => {
    const evento_id = req.params.evento_id;
    try {
      const evento = await Evento.getEventoById(evento_id);
      if (evento.length === 0) {
        res.status(404).json({ error: 'Evento no encontrado' });
      } else {
        res.json(evento[0]);
      }
    } catch (error) {
      console.error('Error al obtener evento por ID:', error);
      res.status(500).json({ error: 'Error al obtener evento por ID' });
    }
  },

  updateEvento: async (req, res) => {
    const evento_id = req.params.evento_id;
    const { nombre, fecha_inicio, fecha_termino, hora, tipo_evento_id, organizador_id, categoria_id, ubicacion, max_per, estado, autorizado_por, fecha_autorizacion } = req.body;
    try {
      await Evento.updateEvento(evento_id, nombre, fecha_inicio, fecha_termino, hora, tipo_evento_id, organizador_id, categoria_id, ubicacion, max_per, estado, autorizado_por, fecha_autorizacion);
      res.json({ message: 'Evento actualizado correctamente' });
    } catch (error) {
      console.error('Error al actualizar evento:', error);
      res.status(500).json({ error: 'Error al actualizar evento' });
    }
  },

  deleteEvento: async (req, res) => {
    const evento_id = req.params.evento_id;
    try {
      await Evento.deleteEvento(evento_id);
      res.json({ message: 'Evento eliminado correctamente' });
    } catch (error) {
      console.error('Error al eliminar evento:', error);
      res.status(500).json({ error: 'Error al eliminar evento' });
    }
  }
};

module.exports = eventosController;
