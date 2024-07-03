// src/models/validacionModel.js

const db = require('../database');

const Validacion = {
  create: async (estado, comentarios) => {
    const query = 'INSERT INTO Validacion (estado, comentarios) VALUES (?, ?)';
    try {
      const [results] = await db.query(query, [estado, comentarios]);
      return results;
    } catch (error) {
      throw error;
    }
  },

  getAllValidaciones: async () => {
    const query = 'SELECT * FROM Validacion';
    try {
      const [results] = await db.query(query);
      return results;
    } catch (error) {
      throw error;
    }
  },

  getValidacionById: async (validacion_id) => {
    const query = 'SELECT * FROM Validacion WHERE validacion_id = ?';
    try {
      const [results] = await db.query(query, [validacion_id]);
      return results;
    } catch (error) {
      throw error;
    }
  },

  updateValidacion: async (validacion_id, estado, comentarios) => {
    const query = 'UPDATE Validacion SET estado = ?, comentarios = ? WHERE validacion_id = ?';
    try {
      const [results] = await db.query(query, [estado, comentarios, validacion_id]);
      return results;
    } catch (error) {
      throw error;
    }
  },

  deleteValidacion: async (validacion_id) => {
    const query = 'DELETE FROM Validacion WHERE validacion_id = ?';
    try {
      const [results] = await db.query(query, [validacion_id]);
      return results;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = Validacion;
