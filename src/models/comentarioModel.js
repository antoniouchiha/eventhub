const db = require('../database');

const Comentario = {
  create: (usuario_id, evento_id, comentario) => {
    return db.execute(
      'INSERT INTO Comentarios (usuario_id, evento_id, comentario) VALUES (?, ?, ?)',
      [usuario_id, evento_id, comentario]
    );
  },

  findAll: () => {
    return db.execute('SELECT * FROM Comentarios');
  },

  findById: (comentario_id) => {
    return db.execute(
      'SELECT * FROM Comentarios WHERE comentario_id = ?',
      [comentario_id]
    );
  },

  update: (comentario_id, comentario) => {
    return db.execute(
      'UPDATE Comentarios SET comentario = ? WHERE comentario_id = ?',
      [comentario, comentario_id]
    );
  },

  delete: (comentario_id) => {
    return db.execute(
      'DELETE FROM Comentarios WHERE comentario_id = ?',
      [comentario_id]
    );
  }
};

module.exports = Comentario;
