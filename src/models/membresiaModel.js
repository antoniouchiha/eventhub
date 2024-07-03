const db = require('../database');

const Membresia = {
  create: (tipo, descripcion, costo) => {
    return db.execute(
      'INSERT INTO Membresia (tipo, descripcion, costo) VALUES (?, ?, ?)',
      [tipo, descripcion, costo]
    );
  },

  findById: (membresia_id) => {
    return db.execute(
      'SELECT * FROM Membresia WHERE membresia_id = ?',
      [membresia_id]
    );
  },

  findAll: () => {
    return db.execute('SELECT * FROM Membresia');
  },

  update: (membresia_id, tipo, descripcion, costo) => {
    return db.execute(
      'UPDATE Membresia SET tipo = ?, descripcion = ?, costo = ? WHERE membresia_id = ?',
      [tipo, descripcion, costo, membresia_id]
    );
  },

  delete: (membresia_id) => {
    return db.execute(
      'DELETE FROM Membresia WHERE membresia_id = ?',
      [membresia_id]
    );
  }
};

module.exports = Membresia;
