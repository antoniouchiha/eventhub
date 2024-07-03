const Pago = require('../models/pagosModel');

const pagosController = {
  createPago: async (req, res) => {
    const { monto, fecha, tipo_pago_id, usuario_id, evento_id } = req.body;
    try {
      const result = await Pago.create(monto, fecha, tipo_pago_id, usuario_id, evento_id);
      res.status(201).json({ message: 'Pago creado correctamente', pago_id: result.insertId });
    } catch (error) {
      console.error('Error al crear pago:', error);
      res.status(500).json({ error: 'Error al crear pago' });
    }
  },

  getAllPagos: async (req, res) => {
    try {
      const pagos = await Pago.getAll();
      res.json(pagos);
    } catch (error) {
      console.error('Error al obtener pagos:', error);
      res.status(500).json({ error: 'Error al obtener pagos' });
    }
  },

  getPagoById: async (req, res) => {
    const pago_id = req.params.pago_id;
    try {
      const pago = await Pago.getById(pago_id);
      if (pago.length === 0) {
        res.status(404).json({ error: 'Pago no encontrado' });
      } else {
        res.json(pago[0]);
      }
    } catch (error) {
      console.error('Error al obtener pago por ID:', error);
      res.status(500).json({ error: 'Error al obtener pago por ID' });
    }
  },

  updatePago: async (req, res) => {
    const pago_id = req.params.pago_id;
    const { monto, fecha, tipo_pago_id, usuario_id, evento_id } = req.body;
    try {
      await Pago.update(pago_id, monto, fecha, tipo_pago_id, usuario_id, evento_id);
      res.json({ message: 'Pago actualizado correctamente' });
    } catch (error) {
      console.error('Error al actualizar pago:', error);
      res.status(500).json({ error: 'Error al actualizar pago' });
    }
  },

  deletePago: async (req, res) => {
    const pago_id = req.params.pago_id;
    try {
      await Pago.delete(pago_id);
      res.json({ message: 'Pago eliminado correctamente' });
    } catch (error) {
      console.error('Error al eliminar pago:', error);
      res.status(500).json({ error: 'Error al eliminar pago' });
    }
  }
};

module.exports = pagosController;
