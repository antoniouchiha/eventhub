// src/models/rolesPermisosModel.js

const db = require('../database');

const RolesPermisos = {
  create: async (rol_id, permiso_id) => {
    const query = 'INSERT INTO Roles_Permisos (rol_id, permiso_id) VALUES (?, ?)';
    try {
      const [results] = await db.query(query, [rol_id, permiso_id]);
      return results;
    } catch (error) {
      throw error;
    }
  },

  getAllRolesPermisos: async () => {
    const query = 'SELECT * FROM Roles_Permisos';
    try {
      const [results] = await db.query(query);
      return results;
    } catch (error) {
      throw error;
    }
  },

  getRolesPermisosByRolId: async (rol_id) => {
    const query = 'SELECT * FROM Roles_Permisos WHERE rol_id = ?';
    try {
      const [results] = await db.query(query, [rol_id]);
      return results;
    } catch (error) {
      throw error;
    }
  },

  getRolesPermisosByPermisoId: async (permiso_id) => {
    const query = 'SELECT * FROM Roles_Permisos WHERE permiso_id = ?';
    try {
      const [results] = await db.query(query, [permiso_id]);
      return results;
    } catch (error) {
      throw error;
    }
  },

  deleteRolesPermisos: async (rol_id, permiso_id) => {
    const query = 'DELETE FROM Roles_Permisos WHERE rol_id = ? AND permiso_id = ?';
    try {
      const [results] = await db.query(query, [rol_id, permiso_id]);
      return results;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = RolesPermisos;
