// src/controllers/asistentesController.js

const Asistente = require('../models/asistentesModel');

const createAsistente = async (req, res) => {
  const { usuario_id, evento_id } = req.body;
  try {
    const result = await Asistente.create(usuario_id, evento_id);
    res.status(201).json({ message: 'Asistente creado exitosamente', asistente_id: result.insertId });
  } catch (error) {
    console.error('Error al crear asistente:', error);
    res.status(500).json({ error: 'Error al crear asistente' });
  }
};

const getAllAsistentes = async (req, res) => {
  try {
    const asistentes = await Asistente.getAll();
    res.json(asistentes);
  } catch (error) {
    console.error('Error al obtener asistentes:', error);
    res.status(500).json({ error: 'Error al obtener asistentes' });
  }
};

const getAsistenteById = async (req, res) => {
  const asistente_id = req.params.asistente_id;
  try {
    const asistente = await Asistente.getById(asistente_id);
    if (asistente.length === 0) {
      res.status(404).json({ error: 'Asistente no encontrado' });
    } else {
      res.json(asistente[0]);
    }
  } catch (error) {
    console.error('Error al obtener asistente por ID:', error);
    res.status(500).json({ error: 'Error al obtener asistente por ID' });
  }
};

const updateAsistente = async (req, res) => {
  const asistente_id = req.params.asistente_id;
  const { usuario_id, evento_id } = req.body;
  try {
    await Asistente.update(asistente_id, usuario_id, evento_id);
    res.json({ message: 'Asistente actualizado exitosamente' });
  } catch (error) {
    console.error('Error al actualizar asistente:', error);
    res.status(500).json({ error: 'Error al actualizar asistente' });
  }
};

const deleteAsistente = async (req, res) => {
  const asistente_id = req.params.asistente_id;
  try {
    await Asistente.delete(asistente_id);
    res.json({ message: 'Asistente eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar asistente:', error);
    res.status(500).json({ error: 'Error al eliminar asistente' });
  }
};

module.exports = {
  createAsistente,
  getAllAsistentes,
  getAsistenteById,
  updateAsistente,
  deleteAsistente,
};
