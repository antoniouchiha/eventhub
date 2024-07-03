const Asiento = require('../models/asientosModel');

const asientosController = {
  createAsiento: async (req, res) => {
    const { numero_asiento, estado, usuario_id } = req.body;
    try {
      const result = await Asiento.create(numero_asiento, estado, usuario_id);
      res.status(201).json({ message: 'Asiento creado correctamente', asiento_id: result.insertId });
    } catch (error) {
      console.error('Error al crear asiento:', error);
      res.status(500).json({ error: 'Error al crear asiento' });
    }
  },

  getAllAsientos: async (req, res) => {
    try {
      const asientos = await Asiento.getAll();
      res.json(asientos);
    } catch (error) {
      console.error('Error al obtener asientos:', error);
      res.status(500).json({ error: 'Error al obtener asientos' });
    }
  },

  getAsientoById: async (req, res) => {
    const asiento_id = req.params.asiento_id;
    try {
      const asiento = await Asiento.getById(asiento_id);
      if (asiento.length === 0) {
        res.status(404).json({ error: 'Asiento no encontrado' });
      } else {
        res.json(asiento[0]);
      }
    } catch (error) {
      console.error('Error al obtener asiento por ID:', error);
      res.status(500).json({ error: 'Error al obtener asiento por ID' });
    }
  },

  updateAsiento: async (req, res) => {
    const asiento_id = req.params.asiento_id;
    const { numero_asiento, estado, usuario_id } = req.body;
    try {
      await Asiento.update(asiento_id, numero_asiento, estado, usuario_id);
      res.json({ message: 'Asiento actualizado correctamente' });
    } catch (error) {
      console.error('Error al actualizar asiento:', error);
      res.status(500).json({ error: 'Error al actualizar asiento' });
    }
  },

  deleteAsiento: async (req, res) => {
    const asiento_id = req.params.asiento_id;
    try {
      await Asiento.delete(asiento_id);
      res.json({ message: 'Asiento eliminado correctamente' });
    } catch (error) {
      console.error('Error al eliminar asiento:', error);
      res.status(500).json({ error: 'Error al eliminar asiento' });
    }
  }
};

module.exports = asientosController;
