// src/models/tipoPagoModel.js

const db = require('../database');

const TipoPago = {
  create: async (nombre) => {
    const query = 'INSERT INTO Tipos_Pago (nombre) VALUES (?)';
    try {
      const [results] = await db.query(query, [nombre]);
      return results;
    } catch (error) {
      throw error;
    }
  },

  getAllTiposPago: async () => {
    const query = 'SELECT * FROM Tipos_Pago';
    try {
      const [results] = await db.query(query);
      return results;
    } catch (error) {
      throw error;
    }
  },

  getTipoPagoById: async (tipo_pago_id) => {
    const query = 'SELECT * FROM Tipos_Pago WHERE tipo_pago_id = ?';
    try {
      const [results] = await db.query(query, [tipo_pago_id]);
      return results;
    } catch (error) {
      throw error;
    }
  },

  updateTipoPago: async (tipo_pago_id, nombre) => {
    const query = 'UPDATE Tipos_Pago SET nombre = ? WHERE tipo_pago_id = ?';
    try {
      const [results] = await db.query(query, [nombre, tipo_pago_id]);
      return results;
    } catch (error) {
      throw error;
    }
  },

  deleteTipoPago: async (tipo_pago_id) => {
    const query = 'DELETE FROM Tipos_Pago WHERE tipo_pago_id = ?';
    try {
      const [results] = await db.query(query, [tipo_pago_id]);
      return results;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = TipoPago;
