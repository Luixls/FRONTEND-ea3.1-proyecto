const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');
const app = express();

// Cargar configuración de dotenv desde el archivo datos.env
dotenv.config({ path: './config/datos.env' });

// Configuración de Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuración de EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Configuración del servidor
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
