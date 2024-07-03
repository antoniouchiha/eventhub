const db = require('../database');

const Escenario = {
  create: (asiento, forma, evento_id) => {
    return db.execute(
      'INSERT INTO Escenario (asiento, forma, evento_id) VALUES (?, ?, ?)',
      [asiento, forma, evento_id]
    );
  },

  findAll: () => {
    return db.execute('SELECT * FROM Escenario');
  },

  findById: (escenario_id) => {
    return db.execute(
      'SELECT * FROM Escenario WHERE escenario_id = ?',
      [escenario_id]
    );
  },

  update: (escenario_id, asiento, forma, evento_id) => {
    return db.execute(
      'UPDATE Escenario SET asiento = ?, forma = ?, evento_id = ? WHERE escenario_id = ?',
      [asiento, forma, evento_id, escenario_id]
    );
  },

  delete: (escenario_id) => {
    return db.execute(
      'DELETE FROM Escenario WHERE escenario_id = ?',
      [escenario_id]
    );
  }
};

module.exports = Escenario;
