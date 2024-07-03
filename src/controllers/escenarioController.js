const Escenario = require('../models/escenarioModel');

const escenarioController = {
  createEscenario: async (req, res) => {
    const { asiento, forma, evento_id } = req.body;

    if (!asiento || !forma || !evento_id) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    try {
      const [result] = await Escenario.create(asiento, forma, evento_id);
      res.status(201).json({ message: 'Escenario creado correctamente', escenario_id: result.insertId });
    } catch (error) {
      console.error('Error al crear escenario:', error);
      res.status(500).json({ error: 'Error al crear escenario' });
    }
  },

  getAllEscenarios: async (req, res) => {
    try {
      const [rows, fields] = await Escenario.findAll();
      res.json(rows);
    } catch (error) {
      console.error('Error al obtener escenarios:', error);
      res.status(500).json({ error: 'Error al obtener escenarios' });
    }
  },

  getEscenarioById: async (req, res) => {
    const escenario_id = req.params.escenario_id;
    try {
      const [rows, fields] = await Escenario.findById(escenario_id);
      if (rows.length === 0) {
        res.status(404).json({ error: 'Escenario no encontrado' });
      } else {
        res.json(rows[0]);
      }
    } catch (error) {
      console.error('Error al obtener escenario por ID:', error);
      res.status(500).json({ error: 'Error al obtener escenario por ID' });
    }
  },

  updateEscenario: async (req, res) => {
    const escenario_id = req.params.escenario_id;
    const { asiento, forma, evento_id } = req.body;

    if (!asiento || !forma || !evento_id) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    try {
      await Escenario.update(escenario_id, asiento, forma, evento_id);
      res.json({ message: 'Escenario actualizado correctamente' });
    } catch (error) {
      console.error('Error al actualizar escenario:', error);
      res.status(500).json({ error: 'Error al actualizar escenario' });
    }
  },

  deleteEscenario: async (req, res) => {
    const escenario_id = req.params.escenario_id;
    try {
      await Escenario.delete(escenario_id);
      res.json({ message: 'Escenario eliminado correctamente' });
    } catch (error) {
      console.error('Error al eliminar escenario:', error);
      res.status(500).json({ error: 'Error al eliminar escenario' });
    }
  }
};

module.exports = escenarioController;
