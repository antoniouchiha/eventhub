// src/models/tiposEventoModel.js

const db = require('../database');

const TipoEvento = {
  create: async (nombre) => {
    const query = 'INSERT INTO Tipos_Evento (nombre) VALUES (?)';
    try {
      const [results] = await db.query(query, [nombre]);
      return results;
    } catch (error) {
      throw error;
    }
  },

  getAllTiposEvento: async () => {
    const query = 'SELECT * FROM Tipos_Evento';
    try {
      const [results] = await db.query(query);
      return results;
    } catch (error) {
      throw error;
    }
  },

  getTipoEventoById: async (tipo_evento_id) => {
    const query = 'SELECT * FROM Tipos_Evento WHERE tipo_evento_id = ?';
    try {
      const [results] = await db.query(query, [tipo_evento_id]);
      return results;
    } catch (error) {
      throw error;
    }
  },

  updateTipoEvento: async (tipo_evento_id, nombre) => {
    const query = 'UPDATE Tipos_Evento SET nombre = ? WHERE tipo_evento_id = ?';
    try {
      const [results] = await db.query(query, [nombre, tipo_evento_id]);
      return results;
    } catch (error) {
      throw error;
    }
  },

  deleteTipoEvento: async (tipo_evento_id) => {
    const query = 'DELETE FROM Tipos_Evento WHERE tipo_evento_id = ?';
    try {
      const [results] = await db.query(query, [tipo_evento_id]);
      return results;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = TipoEvento;
