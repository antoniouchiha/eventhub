const Imagen = require('../models/imagenModel');

const imagenesController = {
  createImagen: async (req, res) => {
    const { usuario_id, evento_id, imagen_url, es_principal } = req.body;
    try {
      const result = await Imagen.create(usuario_id, evento_id, imagen_url, es_principal);
      res.status(201).json({ message: 'Imagen creada correctamente', imagen_id: result[0].insertId });
    } catch (error) {
      console.error('Error al crear imagen:', error);
      res.status(500).json({ error: 'Error al crear imagen' });
    }
  },

  getAllImagenes: async (req, res) => {
    try {
      const [imagenes] = await Imagen.getAll();
      res.json(imagenes);
    } catch (error) {
      console.error('Error al obtener imágenes:', error);
      res.status(500).json({ error: 'Error al obtener imágenes' });
    }
  },

  getImagenById: async (req, res) => {
    const { imagen_id } = req.params;
    try {
      const [imagen] = await Imagen.getById(imagen_id);
      if (imagen.length === 0) {
        res.status(404).json({ error: 'Imagen no encontrada' });
      } else {
        res.json(imagen[0]);
      }
    } catch (error) {
      console.error('Error al obtener imagen por ID:', error);
      res.status(500).json({ error: 'Error al obtener imagen por ID' });
    }
  },

  updateImagen: async (req, res) => {
    const { imagen_id } = req.params;
    const { usuario_id, evento_id, imagen_url, es_principal } = req.body;
    try {
      await Imagen.update(imagen_id, usuario_id, evento_id, imagen_url, es_principal);
      res.json({ message: 'Imagen actualizada correctamente' });
    } catch (error) {
      console.error('Error al actualizar imagen:', error);
      res.status(500).json({ error: 'Error al actualizar imagen' });
    }
  },

  deleteImagen: async (req, res) => {
    const { imagen_id } = req.params;
    try {
      await Imagen.delete(imagen_id);
      res.json({ message: 'Imagen eliminada correctamente' });
    } catch (error) {
      console.error('Error al eliminar imagen:', error);
      res.status(500).json({ error: 'Error al eliminar imagen' });
    }
  }
};

module.exports = imagenesController;
