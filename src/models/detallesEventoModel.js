// src/models/detallesEventoModel.js

const db = require('../database');

const DetallesEvento = {
  create: async (evento_id, descripcion, requerimientos) => {
    const query = 'INSERT INTO Detalles_Evento (evento_id, descripcion, requerimientos) VALUES (?, ?, ?)';
    try {
      const [results] = await db.query(query, [evento_id, descripcion, requerimientos]);
      return results;
    } catch (error) {
      throw error;
    }
  },

  getAllDetallesEvento: async () => {
    const query = `
      SELECT DE.*, E.nombre AS nombre_evento 
      FROM Detalles_Evento DE
      JOIN Eventos E ON DE.evento_id = E.evento_id
    `;
    try {
      const [results] = await db.query(query);
      return results;
    } catch (error) {
      throw error;
    }
  },

  getDetalleEventoById: async (detalle_evento_id) => {
    const query = `
      SELECT DE.*, E.nombre AS nombre_evento 
      FROM Detalles_Evento DE
      JOIN Eventos E ON DE.evento_id = E.evento_id
      WHERE DE.detalle_evento_id = ?
    `;
    try {
      const [results] = await db.query(query, [detalle_evento_id]);
      return results;
    } catch (error) {
      throw error;
    }
  },

  getDetallesEventoByEventoId: async (evento_id) => {
    const query = `
      SELECT DE.*, E.nombre AS nombre_evento 
      FROM Detalles_Evento DE
      JOIN Eventos E ON DE.evento_id = E.evento_id
      WHERE DE.evento_id = ?
    `;
    try {
      const [results] = await db.query(query, [evento_id]);
      return results;
    } catch (error) {
      throw error;
    }
  },

  updateDetalleEvento: async (detalle_evento_id, descripcion, requerimientos) => {
    const query = 'UPDATE Detalles_Evento SET descripcion = ?, requerimientos = ? WHERE detalle_evento_id = ?';
    try {
      const [results] = await db.query(query, [descripcion, requerimientos, detalle_evento_id]);
      return results;
    } catch (error) {
      throw error;
    }
  },

  deleteDetalleEvento: async (detalle_evento_id) => {
    const query = 'DELETE FROM Detalles_Evento WHERE detalle_evento_id = ?';
    try {
      const [results] = await db.query(query, [detalle_evento_id]);
      return results;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = DetallesEvento;
