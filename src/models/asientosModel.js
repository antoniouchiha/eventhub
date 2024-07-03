const db = require('../database');

const Asiento = {
  create: async (numero_asiento, estado, usuario_id) => {
    const query = `
      INSERT INTO Asientos (numero_asiento, estado, usuario_id)
      VALUES (?, ?, ?)
    `;
    try {
      const [results] = await db.query(query, [numero_asiento, estado, usuario_id]);
      return results;
    } catch (error) {
      throw error;
    }
  },

  getAll: async () => {
    const query = 'SELECT * FROM Asientos';
    try {
      const [results] = await db.query(query);
      return results;
    } catch (error) {
      throw error;
    }
  },

  getById: async (asiento_id) => {
    const query = 'SELECT * FROM Asientos WHERE asiento_id = ?';
    try {
      const [results] = await db.query(query, [asiento_id]);
      return results;
    } catch (error) {
      throw error;
    }
  },

  update: async (asiento_id, numero_asiento, estado, usuario_id) => {
    const query = `
      UPDATE Asientos
      SET numero_asiento = ?, estado = ?, usuario_id = ?
      WHERE asiento_id = ?
    `;
    try {
      const [results] = await db.query(query, [numero_asiento, estado, usuario_id, asiento_id]);
      return results;
    } catch (error) {
      throw error;
    }
  },

  delete: async (asiento_id) => {
    const query = 'DELETE FROM Asientos WHERE asiento_id = ?';
    try {
      const [results] = await db.query(query, [asiento_id]);
      return results;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = Asiento;
