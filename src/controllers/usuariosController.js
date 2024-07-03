// src/controllers/usuariosController.js

const Usuario = require('../models/usuarioModel');

const usuariosController = {
  createUsuario: async (req, res) => {
    const { nombre, email, contrasena, telefono, rol_id, membresia_id } = req.body;
    try {
      const result = await Usuario.create(nombre, email, contrasena, telefono, rol_id, membresia_id);
      res.status(201).json({ message: 'Usuario creado correctamente', usuario_id: result.insertId });
    } catch (error) {
      console.error('Error al crear usuario:', error);
      res.status(500).json({ error: 'Error al crear usuario' });
    }
  },

  getAllUsuarios: async (req, res) => {
    try {
      const usuarios = await Usuario.getAllUsuarios();
      res.json(usuarios);
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      res.status(500).json({ error: 'Error al obtener usuarios' });
    }
  },

  getUsuarioById: async (req, res) => {
    const usuario_id = req.params.usuario_id;
    try {
      const usuario = await Usuario.getUsuarioById(usuario_id);
      if (usuario.length === 0) {
        res.status(404).json({ error: 'Usuario no encontrado' });
      } else {
        res.json(usuario[0]);
      }
    } catch (error) {
      console.error('Error al obtener usuario por ID:', error);
      res.status(500).json({ error: 'Error al obtener usuario por ID' });
    }
  },

  updateUsuario: async (req, res) => {
    const usuario_id = req.params.usuario_id;
    const { nombre, email, telefono, rol_id, membresia_id, activo } = req.body;
    try {
      await Usuario.updateUsuario(usuario_id, nombre, email, telefono, rol_id, membresia_id, activo);
      res.json({ message: 'Usuario actualizado correctamente' });
    } catch (error) {
      console.error('Error al actualizar usuario:', error);
      res.status(500).json({ error: 'Error al actualizar usuario' });
    }
  },

  deleteUsuario: async (req, res) => {
    const usuario_id = req.params.usuario_id;
    try {
      await Usuario.deleteUsuario(usuario_id);
      res.json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
      res.status(500).json({ error: 'Error al eliminar usuario' });
    }
  }
};

module.exports = usuariosController;
