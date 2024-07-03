// src/controllers/tokensController.js

const Token = require('../models/tokensModel');

const createToken = async (req, res) => {
  const { usuario_id, token, expiracion } = req.body;
  try {
    const result = await Token.create(usuario_id, token, expiracion);
    res.status(201).json({ message: 'Token creado exitosamente', token_id: result.insertId });
  } catch (error) {
    console.error('Error al crear token:', error);
    res.status(500).json({ error: 'Error al crear token' });
  }
};

const getAllTokens = async (req, res) => {
  try {
    const tokens = await Token.getAll();
    res.json(tokens);
  } catch (error) {
    console.error('Error al obtener tokens:', error);
    res.status(500).json({ error: 'Error al obtener tokens' });
  }
};

const getTokenById = async (req, res) => {
  const token_id = req.params.token_id;
  try {
    const token = await Token.getById(token_id);
    if (token.length === 0) {
      res.status(404).json({ error: 'Token no encontrado' });
    } else {
      res.json(token[0]);
    }
  } catch (error) {
    console.error('Error al obtener token por ID:', error);
    res.status(500).json({ error: 'Error al obtener token por ID' });
  }
};

const updateToken = async (req, res) => {
  const token_id = req.params.token_id;
  const { usuario_id, token, expiracion } = req.body;
  try {
    await Token.update(token_id, usuario_id, token, expiracion);
    res.json({ message: 'Token actualizado exitosamente' });
  } catch (error) {
    console.error('Error al actualizar token:', error);
    res.status(500).json({ error: 'Error al actualizar token' });
  }
};

const deleteToken = async (req, res) => {
  const token_id = req.params.token_id;
  try {
    await Token.delete(token_id);
    res.json({ message: 'Token eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar token:', error);
    res.status(500).json({ error: 'Error al eliminar token' });
  }
};

module.exports = {
  createToken,
  getAllTokens,
  getTokenById,
  updateToken,
  deleteToken,
};
