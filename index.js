const express = require('express');
const app = express();
const port = 3000;

// RUTAS
// Ruta raiz
app.get('/', (req, res) => {
  res.send('Hola mi servidor Express');
});

// Ruta de prueba
app.get('/nueva-ruta', (req, res) => {
  res.send('Este es mi nuevo endpoint');
});

app.get('/otra-ruta', (req, res) => {
  res.send('Otra ruta');
});

app.get('/json', (req, res) => {
  res.json({
    producto: 'Arduino MKR 1330',
    precio: 60.0,
  });
});

app.listen(port, () => {
  console.log('Mi port ' + port);
});
