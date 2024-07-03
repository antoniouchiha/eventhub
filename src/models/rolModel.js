// src/models/rolModel.js

const db = require('../database');

const Rol = {
  create: (nombre) => {
    return db.execute(
      'INSERT INTO Roles (nombre) VALUES (?)',
      [nombre]
    );
  },

  getAllRoles: () => {
    return db.query(
      'SELECT * FROM Roles'
    );
  },

  getRolById: (rol_id) => {
    return db.query(
      'SELECT * FROM Roles WHERE rol_id = ?',
      [rol_id]
    );
  },

  updateRol: (rol_id, nombre) => {
    return db.execute(
      'UPDATE Roles SET nombre = ? WHERE rol_id = ?',
      [nombre, rol_id]
    );
  },

  deleteRol: (rol_id) => {
    return db.execute(
      'DELETE FROM Roles WHERE rol_id = ?',
      [rol_id]
    );
  }
};

module.exports = Rol;
