const db = require('../database');

const ErrorLog = {
  create: async (usuario_id, mensaje) => {
    const query = `
      INSERT INTO Errores_Logs (usuario_id, mensaje)
      VALUES (?, ?)
    `;
    try {
      const [results] = await db.query(query, [usuario_id, mensaje]);
      return results;
    } catch (error) {
      throw error;
    }
  },

  getAll: async () => {
    const query = 'SELECT * FROM Errores_Logs';
    try {
      const [results] = await db.query(query);
      return results;
    } catch (error) {
      throw error;
    }
  },

  getById: async (log_id) => {
    const query = 'SELECT * FROM Errores_Logs WHERE log_id = ?';
    try {
      const [results] = await db.query(query, [log_id]);
      return results;
    } catch (error) {
      throw error;
    }
  },

  delete: async (log_id) => {
    const query = 'DELETE FROM Errores_Logs WHERE log_id = ?';
    try {
      const [results] = await db.query(query, [log_id]);
      return results;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = ErrorLog;
