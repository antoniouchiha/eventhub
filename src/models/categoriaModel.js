// src/models/categoriaModel.js

const db = require('../database');

const Categoria = {
  create: async (nombre) => {
    const query = 'INSERT INTO Categorias (nombre) VALUES (?)';
    try {
      const [results] = await db.query(query, [nombre]);
      return results;
    } catch (error) {
      throw error;
    }
  },

  getAllCategorias: async () => {
    const query = 'SELECT * FROM Categorias';
    try {
      const [results] = await db.query(query);
      return results;
    } catch (error) {
      throw error;
    }
  },

  getCategoriaById: async (categoria_id) => {
    const query = 'SELECT * FROM Categorias WHERE categoria_id = ?';
    try {
      const [results] = await db.query(query, [categoria_id]);
      return results;
    } catch (error) {
      throw error;
    }
  },

  updateCategoria: async (categoria_id, nombre) => {
    const query = 'UPDATE Categorias SET nombre = ? WHERE categoria_id = ?';
    try {
      const [results] = await db.query(query, [nombre, categoria_id]);
      return results;
    } catch (error) {
      throw error;
    }
  },

  deleteCategoria: async (categoria_id) => {
    const query = 'DELETE FROM Categorias WHERE categoria_id = ?';
    try {
      const [results] = await db.query(query, [categoria_id]);
      return results;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = Categoria;
