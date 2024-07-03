// src/controllers/tiposPagoController.js

const TipoPago = require('../models/tipoPagoModel');

const tiposPagoController = {
  createTipoPago: async (req, res) => {
    const { nombre } = req.body;
    try {
      const result = await TipoPago.create(nombre);
      res.status(201).json({ message: 'Tipo de pago creado correctamente', tipo_pago_id: result.insertId });
    } catch (error) {
      console.error('Error al crear tipo de pago:', error);
      res.status(500).json({ error: 'Error al crear tipo de pago' });
    }
  },

  getAllTiposPago: async (req, res) => {
    try {
      const tiposPago = await TipoPago.getAllTiposPago();
      res.json(tiposPago);
    } catch (error) {
      console.error('Error al obtener tipos de pago:', error);
      res.status(500).json({ error: 'Error al obtener tipos de pago' });
    }
  },

  getTipoPagoById: async (req, res) => {
    const tipo_pago_id = req.params.tipo_pago_id;
    try {
      const tipoPago = await TipoPago.getTipoPagoById(tipo_pago_id);
      if (tipoPago.length === 0) {
        res.status(404).json({ error: 'Tipo de pago no encontrado' });
      } else {
        res.json(tipoPago[0]);
      }
    } catch (error) {
      console.error('Error al obtener tipo de pago por ID:', error);
      res.status(500).json({ error: 'Error al obtener tipo de pago por ID' });
    }
  },

  updateTipoPago: async (req, res) => {
    const tipo_pago_id = req.params.tipo_pago_id;
    const { nombre } = req.body;
    try {
      await TipoPago.updateTipoPago(tipo_pago_id, nombre);
      res.json({ message: 'Tipo de pago actualizado correctamente' });
    } catch (error) {
      console.error('Error al actualizar tipo de pago:', error);
      res.status(500).json({ error: 'Error al actualizar tipo de pago' });
    }
  },

  deleteTipoPago: async (req, res) => {
    const tipo_pago_id = req.params.tipo_pago_id;
    try {
      await TipoPago.deleteTipoPago(tipo_pago_id);
      res.json({ message: 'Tipo de pago eliminado correctamente' });
    } catch (error) {
      console.error('Error al eliminar tipo de pago:', error);
      res.status(500).json({ error: 'Error al eliminar tipo de pago' });
    }
  }
};

module.exports = tiposPagoController;
