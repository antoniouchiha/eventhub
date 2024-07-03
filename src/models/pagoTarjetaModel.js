const db = require('../database'); // Importa la configuración de la base de datos

const PagoTarjeta = {
  getAll: async () => {
    try {
      const [rows, fields] = await db.query('SELECT * FROM Pago_Tarjeta');
      return rows;
    } catch (error) {
      throw error;
    }
  },

  getByPagoId: async (pagoId) => {
    try {
      const [rows, fields] = await db.query('SELECT * FROM Pago_Tarjeta WHERE pago_id = ?', [pagoId]);
      if (rows.length > 0) {
        return rows[0];
      } else {
        return null; // O manejar el caso donde no se encuentra ningún pago con ese ID
      }
    } catch (error) {
      throw error;
    }
  },

  create: async (numeroTarjeta, fechaExpiracion, cvv, pagoId) => {
    try {
      const query = 'INSERT INTO Pago_Tarjeta (numero_tarjeta, fecha_expiracion, cvv, pago_id) VALUES (?, ?, ?, ?)';
      const result = await db.query(query, [numeroTarjeta, fechaExpiracion, cvv, pagoId]);
      return result.insertId; // Devuelve el ID del pago creado
    } catch (error) {
      throw error;
    }
  },

  delete: async (pagoId) => {
    try {
      const query = 'DELETE FROM Pago_Tarjeta WHERE pago_id = ?';
      const result = await db.query(query, [pagoId]);
      return result.affectedRows; // Devuelve la cantidad de filas afectadas
    } catch (error) {
      throw error;
    }
  }
};

module.exports = PagoTarjeta;
