const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root', // Cambia esto si tu usuario es diferente
  password: '', // Cambia esto si tu contraseña es diferente
  database: 'eventhub', // Nombre de la base de datos
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise();
