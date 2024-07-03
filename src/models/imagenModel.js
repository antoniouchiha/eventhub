const db = require('../database');

const Imagen = {
  create: async (usuario_id, evento_id, imagen_url, es_principal) => {
    const query = 'INSERT INTO Imagenes (usuario_id, evento_id, imagen_url, es_principal) VALUES (?, ?, ?, ?)';
    const [rows, fields] = await db.execute(query, [usuario_id, evento_id, imagen_url, es_principal]);
    return rows;
  },

  getAll: async () => {
    const query = 'SELECT * FROM Imagenes';
    const [rows, fields] = await db.execute(query);
    return rows;
  },

  getById: async (imagen_id) => {
    const query = 'SELECT * FROM Imagenes WHERE imagen_id = ?';
    const [rows, fields] = await db.execute(query, [imagen_id]);
    return rows;
  },

  update: async (imagen_id, usuario_id, evento_id, imagen_url, es_principal) => {
    const query = 'UPDATE Imagenes SET usuario_id = ?, evento_id = ?, imagen_url = ?, es_principal = ? WHERE imagen_id = ?';
    const [rows, fields] = await db.execute(query, [usuario_id, evento_id, imagen_url, es_principal, imagen_id]);
    return rows;
  },

  delete: async (imagen_id) => {
    const query = 'DELETE FROM Imagenes WHERE imagen_id = ?';
    const [rows, fields] = await db.execute(query, [imagen_id]);
    return rows;
  }
};

module.exports = Imagen;
