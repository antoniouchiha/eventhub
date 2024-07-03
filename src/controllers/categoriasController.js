// src/controllers/categoriasController.js

const Categoria = require('../models/categoriaModel');

const categoriasController = {
  createCategoria: async (req, res) => {
    const { nombre } = req.body;
    try {
      const result = await Categoria.create(nombre);
      res.status(201).json({ message: 'Categoría creada correctamente', categoria_id: result.insertId });
    } catch (error) {
      console.error('Error al crear categoría:', error);
      res.status(500).json({ error: 'Error al crear categoría' });
    }
  },

  getAllCategorias: async (req, res) => {
    try {
      const categorias = await Categoria.getAllCategorias();
      res.json(categorias);
    } catch (error) {
      console.error('Error al obtener categorías:', error);
      res.status(500).json({ error: 'Error al obtener categorías' });
    }
  },

  getCategoriaById: async (req, res) => {
    const categoria_id = req.params.categoria_id;
    try {
      const categoria = await Categoria.getCategoriaById(categoria_id);
      if (categoria.length === 0) {
        res.status(404).json({ error: 'Categoría no encontrada' });
      } else {
        res.json(categoria[0]);
      }
    } catch (error) {
      console.error('Error al obtener categoría por ID:', error);
      res.status(500).json({ error: 'Error al obtener categoría por ID' });
    }
  },

  updateCategoria: async (req, res) => {
    const categoria_id = req.params.categoria_id;
    const { nombre } = req.body;
    try {
      await Categoria.updateCategoria(categoria_id, nombre);
      res.json({ message: 'Categoría actualizada correctamente' });
    } catch (error) {
      console.error('Error al actualizar categoría:', error);
      res.status(500).json({ error: 'Error al actualizar categoría' });
    }
  },

  deleteCategoria: async (req, res) => {
    const categoria_id = req.params.categoria_id;
    try {
      await Categoria.deleteCategoria(categoria_id);
      res.json({ message: 'Categoría eliminada correctamente' });
    } catch (error) {
      console.error('Error al eliminar categoría:', error);
      res.status(500).json({ error: 'Error al eliminar categoría' });
    }
  }
};

module.exports = categoriasController;
