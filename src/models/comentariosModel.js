const db = require('../database');

const Comentario = {
  create: async (usuario_id, evento_id, comentario) => {
    const query = `
      INSERT INTO Comentarios (usuario_id, evento_id, comentario)
      VALUES (?, ?, ?)
    `;
    try {
      const [results] = await db.query(query, [usuario_id, evento_id, comentario]);
      return results;
    } catch (error) {
      throw error;
    }
  },

  getAll: async () => {
    const query = 'SELECT * FROM Comentarios';
    try {
      const [results] = await db.query(query);
      return results;
    } catch (error) {
      throw error;
    }
  },

  getById: async (comentario_id) => {
    const query = 'SELECT * FROM Comentarios WHERE comentario_id = ?';
    try {
      const [results] = await db.query(query, [comentario_id]);
      return results;
    } catch (error) {
      throw error;
    }
  },

  update: async (comentario_id, comentario) => {
    const query = `
      UPDATE Comentarios
      SET comentario = ?
      WHERE comentario_id = ?
    `;
    try {
      const [results] = await db.query(query, [comentario, comentario_id]);
      return results;
    } catch (error) {
      throw error;
    }
  },

  delete: async (comentario_id) => {
    const query = 'DELETE FROM Comentarios WHERE comentario_id = ?';
    try {
      const [results] = await db.query(query, [comentario_id]);
      return results;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = Comentario;
