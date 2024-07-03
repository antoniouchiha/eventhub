const ErrorLog = require('../models/erroresLogsModel');

const erroresLogsController = {
  createErrorLog: async (req, res) => {
    const { usuario_id, mensaje } = req.body;
    try {
      const result = await ErrorLog.create(usuario_id, mensaje);
      res.status(201).json({ message: 'Log de error creado correctamente', log_id: result.insertId });
    } catch (error) {
      console.error('Error al crear log de error:', error);
      res.status(500).json({ error: 'Error al crear log de error' });
    }
  },

  getAllErrorLogs: async (req, res) => {
    try {
      const errorLogs = await ErrorLog.getAll();
      res.json(errorLogs);
    } catch (error) {
      console.error('Error al obtener logs de error:', error);
      res.status(500).json({ error: 'Error al obtener logs de error' });
    }
  },

  getErrorLogById: async (req, res) => {
    const log_id = req.params.log_id;
    try {
      const errorLog = await ErrorLog.getById(log_id);
      if (errorLog.length === 0) {
        res.status(404).json({ error: 'Log de error no encontrado' });
      } else {
        res.json(errorLog[0]);
      }
    } catch (error) {
      console.error('Error al obtener log de error por ID:', error);
      res.status(500).json({ error: 'Error al obtener log de error por ID' });
    }
  },

  deleteErrorLog: async (req, res) => {
    const log_id = req.params.log_id;
    try {
      await ErrorLog.delete(log_id);
      res.json({ message: 'Log de error eliminado correctamente' });
    } catch (error) {
      console.error('Error al eliminar log de error:', error);
      res.status(500).json({ error: 'Error al eliminar log de error' });
    }
  }
};

module.exports = erroresLogsController;
