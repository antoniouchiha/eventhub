const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importar cors
const escenarioRoutes = require('./routes/escenarioRoutes');
const comentarioRoutes = require('./routes/comentarioRoutes');
const membresiaRoutes = require('./routes/membresiaRoutes');
const rolesRoutes = require('./routes/rolesRoutes');
const permisosRoutes = require('./routes/permisosRoutes');
const tiposEventoRoutes = require('./routes/tiposEventoRoutes');
const validacionRoutes = require('./routes/validacionRoutes');
const categoriasRoutes = require('./routes/categoriasRoutes');
const tiposPagoRoutes = require('./routes/tiposPagoRoutes');
const usuariosRoutes = require('./routes/usuariosRoutes');
const eventosRoutes = require('./routes/eventosRoutes');
const rolesPermisosRoutes = require('./routes/rolesPermisosRoutes');
const detallesEventoRoutes = require('./routes/detallesEventoRoutes');
const imagenesRoutes = require('./routes/imagenesRoutes');
const pagosRoutes = require('./routes/pagosRoutes');
const pagoTarjetaRoutes = require('./routes/pagoTarjetaRoutes');
const asistentesRoutes = require('./routes/asistentesRoutes');
const tokensRoutes = require('./routes/tokensRoutes');
const asientosRoutes = require('./routes/asientosRoutes');
const comentariosRoutes = require('./routes/comentariosRoutes');
const erroresLogsRoutes = require('./routes/erroresLogsRoutes');
const db = require('./database');

const app = express();
const PORT = process.env.PORT || 3007;

app.use(cors()); // Agregar el middleware cors aquí
app.use(bodyParser.json());
app.use('/api/escenarios', escenarioRoutes);
app.use('/api/comentarios', comentarioRoutes);
app.use('/api/membresias', membresiaRoutes);
app.use('/api/roles', rolesRoutes);
app.use('/api/permisos', permisosRoutes);
app.use('/api/tipos_evento', tiposEventoRoutes);
app.use('/api/validaciones', validacionRoutes);
app.use('/api/categorias', categoriasRoutes);
app.use('/api/tipos_pago', tiposPagoRoutes);
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/eventos', eventosRoutes);
app.use('/api/roles_permisos', rolesPermisosRoutes);
app.use('/api/detalles_evento', detallesEventoRoutes);
app.use('/api/imagenes', imagenesRoutes);
app.use('/api/pagos', pagosRoutes);
app.use('/api/pago-tarjeta', pagoTarjetaRoutes);
app.use('/api/asistentes', asistentesRoutes);
app.use('/api/tokens', tokensRoutes);
app.use('/api/asientos', asientosRoutes);
app.use('/api/comentarios', comentariosRoutes);
app.use('/api/erroresLogs', erroresLogsRoutes);

// Conexión a la base de datos
db.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Database connected successfully');
  connection.release();
});

// Puerto
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
