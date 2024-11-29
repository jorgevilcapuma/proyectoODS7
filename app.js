const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const path = require('path');
const app = express();
const ip = 'localhost';
const port = 3000;
const fs = require('fs');

// Importamos CORS
const cors = require('cors');
app.use(cors());


// Configuración de middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/public', express.static(path.join(__dirname, 'public')));


// Configuración de conexión a MySQL con un pool
let pool = mysql.createPool({
    host: "database-11.cheag0cw0weg.us-east-1.rds.amazonaws.com",
    database: "contacto",
    user: "admin",
    password: "jorgevilcapumatrujilo",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});



// Manejo de la solicitud POST del formulario
app.post('/submit-form', (req, res) => {
    console.log('Datos recibidos:', req.body); // Asegúrate de que los datos están llegando
    const { nombre, apellido, email, mensaje } = req.body;

    // Consulta SQL para insertar los datos del formulario en la base de datos
    const query = 'INSERT INTO contactanos (nombre, apellido, email, mensaje) VALUES (?, ?, ?, ?)';
pool.query(query, [nombre, apellido, email, mensaje], (err, result) => {
    if (err) {
        console.error('Error en el query:', err.message);
        res.status(500).send('Error en la consulta');
        return;
    }
    res.redirect('/');
});

});

// Nueva funcionalidad del calendario

// Servir el archivo HTML principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://${ip}:${port}`);

    // Prueba de conexión a la base de datos al iniciar el servidor
    pool.query('SELECT 1 + 1 AS solution', (error, results) => {
        if (error) {
            console.error('Error conectando a la base de datos:', error.message);
        } else {
            console.log('Conexión exitosa, prueba:', results[0].solution);
        }
    });
    
}); 