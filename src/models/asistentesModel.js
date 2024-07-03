// src/models/asistentesModel.js

const db = require('../database');

const Asistente = {
  create: async (usuario_id, evento_id) => {
    const query = `
      INSERT INTO Asistentes (usuario_id, evento_id)
      VALUES (?, ?)
    `;
    try {
      const [results] = await db.query(query, [usuario_id, evento_id]);
      return results;
    } catch (error) {
      throw error;
    }
  },

  getAll: async () => {
    const query = 'SELECT * FROM Asistentes';
    try {
      const [results] = await db.query(query);
      return results;
    } catch (error) {
      throw error;
    }
  },

  getById: async (asistente_id) => {
    const query = 'SELECT * FROM Asistentes WHERE asistente_id = ?';
    try {
      const [results] = await db.query(query, [asistente_id]);
      return results;
    } catch (error) {
      throw error;
    }
  },

  update: async (asistente_id, usuario_id, evento_id) => {
    const query = `
      UPDATE Asistentes
      SET usuario_id = ?, evento_id = ?
      WHERE asistente_id = ?
    `;
    try {
      const [results] = await db.query(query, [usuario_id, evento_id, asistente_id]);
      return results;
    } catch (error) {
      throw error;
    }
  },

  delete: async (asistente_id) => {
    const query = 'DELETE FROM Asistentes WHERE asistente_id = ?';
    try {
      const [results] = await db.query(query, [asistente_id]);
      return results;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = Asistente;
