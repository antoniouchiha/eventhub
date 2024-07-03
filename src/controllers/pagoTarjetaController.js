// src/controllers/pagoTarjetaController.js

const PagoTarjeta = require('../models/pagoTarjetaModel');

const pagoTarjetaController = {
  createPagoTarjeta: async (req, res) => {
    const { numero_tarjeta, fecha_expiracion, cvv, pago_id } = req.body;
    try {
      const result = await PagoTarjeta.create(numero_tarjeta, fecha_expiracion, cvv, pago_id);
      res.status(201).json({ message: 'Pago con tarjeta creado correctamente', tarjeta_id: result.insertId });
    } catch (error) {
      console.error('Error al crear pago con tarjeta:', error);
      res.status(500).json({ error: 'Error al crear pago con tarjeta' });
    }
  },

  getPagoTarjetaByPagoId: async (req, res) => {
    const pago_id = req.params.pago_id;
    try {
      const pagoTarjeta = await PagoTarjeta.getByPagoId(pago_id);
      if (!pagoTarjeta) {
        res.status(404).json({ error: 'Pago con tarjeta no encontrado' });
      } else {
        res.json(pagoTarjeta);
      }
    } catch (error) {
      console.error('Error al obtener pago con tarjeta por ID:', error);
      res.status(500).json({ error: 'Error al obtener pago con tarjeta por ID' });
    }
  },

  updatePagoTarjeta: async (req, res) => {
    const tarjeta_id = req.params.tarjeta_id;
    const { numero_tarjeta, fecha_expiracion, cvv } = req.body;
    try {
      await PagoTarjeta.update(tarjeta_id, numero_tarjeta, fecha_expiracion, cvv);
      res.json({ message: 'Pago con tarjeta actualizado correctamente' });
    } catch (error) {
      console.error('Error al actualizar pago con tarjeta:', error);
      res.status(500).json({ error: 'Error al actualizar pago con tarjeta' });
    }
  },

  deletePagoTarjetaByPagoId: async (req, res) => {
    const pago_id = req.params.pago_id;
    try {
      await PagoTarjeta.deleteByPagoId(pago_id);
      res.json({ message: 'Pago con tarjeta eliminado correctamente' });
    } catch (error) {
      console.error('Error al eliminar pago con tarjeta:', error);
      res.status(500).json({ error: 'Error al eliminar pago con tarjeta' });
    }
  },

  getAllPagosTarjeta: async (req, res) => {
    try {
      const pagos = await PagoTarjeta.getAll();
      res.json(pagos);
    } catch (error) {
      console.error('Error al obtener todos los pagos con tarjeta:', error);
      res.status(500).json({ error: 'Error al obtener todos los pagos con tarjeta' });
    }
  }
};

module.exports = pagoTarjetaController;
