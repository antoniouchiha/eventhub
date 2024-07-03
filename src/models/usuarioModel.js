// src/models/usuarioModel.js

const db = require('../database');

const Usuario = {
  create: async (nombre, email, contrasena, telefono, rol_id, membresia_id) => {
    const query = `
      INSERT INTO Usuarios (nombre, email, contrasena, telefono, rol_id, membresia_id)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    try {
      const [results] = await db.query(query, [nombre, email, contrasena, telefono, rol_id, membresia_id]);
      return results;
    } catch (error) {
      throw error;
    }
  },

  getAllUsuarios: async () => {
    const query = 'SELECT * FROM Usuarios';
    try {
      const [results] = await db.query(query);
      return results;
    } catch (error) {
      throw error;
    }
  },

  getUsuarioById: async (usuario_id) => {
    const query = 'SELECT * FROM Usuarios WHERE usuario_id = ?';
    try {
      const [results] = await db.query(query, [usuario_id]);
      return results;
    } catch (error) {
      throw error;
    }
  },

  updateUsuario: async (usuario_id, nombre, email, telefono, rol_id, membresia_id, activo) => {
    const query = `
      UPDATE Usuarios
      SET nombre = ?, email = ?, telefono = ?, rol_id = ?, membresia_id = ?, activo = ?
      WHERE usuario_id = ?
    `;
    try {
      const [results] = await db.query(query, [nombre, email, telefono, rol_id, membresia_id, activo, usuario_id]);
      return results;
    } catch (error) {
      throw error;
    }
  },

  deleteUsuario: async (usuario_id) => {
    const query = 'DELETE FROM Usuarios WHERE usuario_id = ?';
    try {
      const [results] = await db.query(query, [usuario_id]);
      return results;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = Usuario;
