// src/models/eventoModel.js

const db = require('../database');

const Evento = {
  // Función para crear un nuevo evento
  create: async (nombre, fecha_inicio, fecha_termino, hora, tipo_evento_id, organizador_id, categoria_id, ubicacion, max_per, estado, autorizado_por, fecha_autorizacion) => {
    const query = `
      INSERT INTO Eventos (nombre, fecha_inicio, fecha_termino, hora, tipo_evento_id, organizador_id, categoria_id, ubicacion, max_per, estado, autorizado_por, fecha_autorizacion)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    try {
      const [results] = await db.query(query, [nombre, fecha_inicio, fecha_termino, hora, tipo_evento_id, organizador_id, categoria_id, ubicacion, max_per, estado, autorizado_por, fecha_autorizacion]);
      return results;
    } catch (error) {
      throw error;
    }
  },

  // Función para obtener todos los eventos con detalles
  getAllEventos: async () => {
    const query = `
      SELECT e.evento_id, e.nombre, e.fecha_inicio, e.fecha_termino, e.hora, 
             te.nombre AS tipo_evento_nombre, c.nombre AS categoria_nombre,
             e.organizador_id, e.categoria_id, e.ubicacion, e.max_per, e.estado, 
             e.autorizado_por AS autorizado_por_id, u_autorizado.nombre AS autorizado_por_nombre, e.fecha_autorizacion
      FROM Eventos e
      LEFT JOIN Tipos_Evento te ON e.tipo_evento_id = te.tipo_evento_id
      LEFT JOIN Categorias c ON e.categoria_id = c.categoria_id
      LEFT JOIN Usuarios u_organizador ON e.organizador_id = u_organizador.usuario_id
      LEFT JOIN Usuarios u_autorizado ON e.autorizado_por = u_autorizado.usuario_id
    `;
    try {
      const [results] = await db.query(query);
      return results;
    } catch (error) {
      throw error;
    }
  },

  // Función para obtener un evento por su ID
  getEventoById: async (evento_id) => {
    const query = `
      SELECT e.evento_id, e.nombre, e.fecha_inicio, e.fecha_termino, e.hora, 
             te.nombre AS tipo_evento_nombre, c.nombre AS categoria_nombre,
             e.organizador_id, e.categoria_id, e.ubicacion, e.max_per, e.estado, 
             e.autorizado_por AS autorizado_por_id, u_autorizado.nombre AS autorizado_por_nombre, e.fecha_autorizacion
      FROM Eventos e
      LEFT JOIN Tipos_Evento te ON e.tipo_evento_id = te.tipo_evento_id
      LEFT JOIN Categorias c ON e.categoria_id = c.categoria_id
      LEFT JOIN Usuarios u_organizador ON e.organizador_id = u_organizador.usuario_id
      LEFT JOIN Usuarios u_autorizado ON e.autorizado_por = u_autorizado.usuario_id
      WHERE e.evento_id = ?
    `;
    try {
      const [results] = await db.query(query, [evento_id]);
      return results;
    } catch (error) {
      throw error;
    }
  },

  // Función para actualizar un evento
  updateEvento: async (evento_id, nombre, fecha_inicio, fecha_termino, hora, tipo_evento_id, organizador_id, categoria_id, ubicacion, max_per, estado, autorizado_por, fecha_autorizacion) => {
    const query = `
      UPDATE Eventos
      SET nombre = ?, fecha_inicio = ?, fecha_termino = ?, hora = ?, tipo_evento_id = ?, organizador_id = ?, categoria_id = ?, ubicacion = ?, max_per = ?, estado = ?, autorizado_por = ?, fecha_autorizacion = ?
      WHERE evento_id = ?
    `;
    try {
      const [results] = await db.query(query, [nombre, fecha_inicio, fecha_termino, hora, tipo_evento_id, organizador_id, categoria_id, ubicacion, max_per, estado, autorizado_por, fecha_autorizacion, evento_id]);
      return results;
    } catch (error) {
      throw error;
    }
  },

  // Función para eliminar un evento
  deleteEvento: async (evento_id) => {
    const query = 'DELETE FROM Eventos WHERE evento_id = ?';
    try {
      const [results] = await db.query(query, [evento_id]);
      return results;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = Evento;
