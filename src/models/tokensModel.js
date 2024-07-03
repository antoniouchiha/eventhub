// src/models/tokensModel.js

const db = require('../database');

const Token = {
  create: async (usuario_id, token, expiracion) => {
    const query = `
      INSERT INTO Tokens (usuario_id, token, expiracion)
      VALUES (?, ?, ?)
    `;
    try {
      const [results] = await db.query(query, [usuario_id, token, expiracion]);
      return results;
    } catch (error) {
      throw error;
    }
  },

  getAll: async () => {
    const query = 'SELECT * FROM Tokens';
    try {
      const [results] = await db.query(query);
      return results;
    } catch (error) {
      throw error;
    }
  },

  getById: async (token_id) => {
    const query = 'SELECT * FROM Tokens WHERE token_id = ?';
    try {
      const [results] = await db.query(query, [token_id]);
      return results;
    } catch (error) {
      throw error;
    }
  },

  update: async (token_id, usuario_id, token, expiracion) => {
    const query = `
      UPDATE Tokens
      SET usuario_id = ?, token = ?, expiracion = ?
      WHERE token_id = ?
    `;
    try {
      const [results] = await db.query(query, [usuario_id, token, expiracion, token_id]);
      return results;
    } catch (error) {
      throw error;
    }
  },

  delete: async (token_id) => {
    const query = 'DELETE FROM Tokens WHERE token_id = ?';
    try {
      const [results] = await db.query(query, [token_id]);
      return results;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = Token;
