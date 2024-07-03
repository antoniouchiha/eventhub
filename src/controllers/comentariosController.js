const Comentario = require('../models/comentariosModel');

const comentariosController = {
  createComentario: async (req, res) => {
    const { usuario_id, evento_id, comentario } = req.body;
    try {
      const result = await Comentario.create(usuario_id, evento_id, comentario);
      res.status(201).json({ message: 'Comentario creado correctamente', comentario_id: result.insertId });
    } catch (error) {
      console.error('Error al crear comentario:', error);
      res.status(500).json({ error: 'Error al crear comentario' });
    }
  },

  getAllComentarios: async (req, res) => {
    try {
      const comentarios = await Comentario.getAll();
      res.json(comentarios);
    } catch (error) {
      console.error('Error al obtener comentarios:', error);
      res.status(500).json({ error: 'Error al obtener comentarios' });
    }
  },

  getComentarioById: async (req, res) => {
    const comentario_id = req.params.comentario_id;
    try {
      const comentario = await Comentario.getById(comentario_id);
      if (comentario.length === 0) {
        res.status(404).json({ error: 'Comentario no encontrado' });
      } else {
        res.json(comentario[0]);
      }
    } catch (error) {
      console.error('Error al obtener comentario por ID:', error);
      res.status(500).json({ error: 'Error al obtener comentario por ID' });
    }
  },

  updateComentario: async (req, res) => {
    const comentario_id = req.params.comentario_id;
    const { comentario } = req.body;
    try {
      await Comentario.update(comentario_id, comentario);
      res.json({ message: 'Comentario actualizado correctamente' });
    } catch (error) {
      console.error('Error al actualizar comentario:', error);
      res.status(500).json({ error: 'Error al actualizar comentario' });
    }
  },

  deleteComentario: async (req, res) => {
    const comentario_id = req.params.comentario_id;
    try {
      await Comentario.delete(comentario_id);
      res.json({ message: 'Comentario eliminado correctamente' });
    } catch (error) {
      console.error('Error al eliminar comentario:', error);
      res.status(500).json({ error: 'Error al eliminar comentario' });
    }
  }
};

module.exports = comentariosController;
