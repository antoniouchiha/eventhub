// src/models/permisosModel.js

const db = require('../database');

const Permiso = {
  create: async (nombre) => {
    const query = 'INSERT INTO Permisos (nombre) VALUES (?)';
    try {
      const [results] = await db.query(query, [nombre]);
      return results;
    } catch (error) {
      throw error;
    }
  },

  getAllPermisos: async () => {
    const query = 'SELECT * FROM Permisos';
    try {
      const [results] = await db.query(query);
      return results;
    } catch (error) {
      throw error;
    }
  },

  getPermisoById: async (permiso_id) => {
    const query = 'SELECT * FROM Permisos WHERE permiso_id = ?';
    try {
      const [results] = await db.query(query, [permiso_id]);
      return results;
    } catch (error) {
      throw error;
    }
  },

  updatePermiso: async (permiso_id, nombre) => {
    const query = 'UPDATE Permisos SET nombre = ? WHERE permiso_id = ?';
    try {
      const [results] = await db.query(query, [nombre, permiso_id]);
      return results;
    } catch (error) {
      throw error;
    }
  },

  deletePermiso: async (permiso_id) => {
    const query = 'DELETE FROM Permisos WHERE permiso_id = ?';
    try {
      const [results] = await db.query(query, [permiso_id]);
      return results;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = Permiso;
