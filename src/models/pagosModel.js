const db = require('../database');

const Pago = {
  create: async (monto, fecha, tipo_pago_id, usuario_id, evento_id) => {
    const query = 'INSERT INTO Pagos (monto, fecha, tipo_pago_id, usuario_id, evento_id) VALUES (?, ?, ?, ?, ?)';
    const [rows, fields] = await db.execute(query, [monto, fecha, tipo_pago_id, usuario_id, evento_id]);
    return rows;
  },

  getAll: async () => {
    const query = 'SELECT * FROM Pagos';
    const [rows, fields] = await db.execute(query);
    return rows;
  },

  getById: async (pago_id) => {
    const query = 'SELECT * FROM Pagos WHERE pago_id = ?';
    const [rows, fields] = await db.execute(query, [pago_id]);
    return rows;
  },

  update: async (pago_id, monto, fecha, tipo_pago_id, usuario_id, evento_id) => {
    const query = 'UPDATE Pagos SET monto = ?, fecha = ?, tipo_pago_id = ?, usuario_id = ?, evento_id = ? WHERE pago_id = ?';
    const [rows, fields] = await db.execute(query, [monto, fecha, tipo_pago_id, usuario_id, evento_id, pago_id]);
    return rows;
  },

  delete: async (pago_id) => {
    const query = 'DELETE FROM Pagos WHERE pago_id = ?';
    const [rows, fields] = await db.execute(query, [pago_id]);
    return rows;
  }
};

module.exports = Pago;
