const express = require('express');
const app = express();
const port = 3000;

// Datos de ejemplo
const lenguajesBackend = [
    { nombre: 'Node.js', turno: 'Mañana', cantidadAlumnos: 25 },
    { nombre: 'Python', turno: 'Tarde', cantidadAlumnos: 30 },
    { nombre: 'Java', turno: 'Noche', cantidadAlumnos: 20 },
];

const lenguajesFrontend = [
    { nombre: 'JavaScript', turno: 'Mañana', cantidadAlumnos: 15 },
    { nombre: 'React', turno: 'Tarde', cantidadAlumnos: 18 },
];

// 1) Endpoint para traer todos los lenguajes de backend
app.get('/api/lenguajes/backend/', (req, res) => {
    res.json(lenguajesBackend);
});

// 2) Endpoint para buscar lenguajes de backend por "lenguaje"
app.get('/api/lenguajes/backend/:lenguaje', (req, res) => {
    const { lenguaje } = req.params;
    const resultado = lenguajesBackend.filter(l => l.nombre.toLowerCase() === lenguaje.toLowerCase());
    res.json(resultado);
});

// 3) Endpoint para buscar lenguajes de backend por "turno"
app.get('/api/lenguajes/backend/turno/:turno', (req, res) => {
    const { turno } = req.params;
    const resultado = lenguajesBackend.filter(l => l.turno.toLowerCase() === turno.toLowerCase());
    res.json(resultado);
});

// 4) Endpoint para buscar lenguajes de frontend por "turno"
app.get('/api/lenguajes/frontend/turno/:turno', (req, res) => {
    const { turno } = req.params;
    const resultado = lenguajesFrontend.filter(l => l.turno.toLowerCase() === turno.toLowerCase());
    res.json(resultado);
});

// 5) Endpoint para buscar lenguajes de backend por "cantidadAlumnos"
app.get('/api/lenguajes/backend/cantidadAlumnos/:cantidad', (req, res) => {
    const cantidad = parseInt(req.params.cantidad);
    const resultado = lenguajesBackend.filter(l => l.cantidadAlumnos >= cantidad);
    res.json(resultado);
});

// 6) Endpoint para buscar lenguajes de frontend por "cantidadAlumnos"
app.get('/api/lenguajes/frontend/cantidadAlumnos/:cantidad', (req, res) => {
    const cantidad = parseInt(req.params.cantidad);
    const resultado = lenguajesFrontend.filter(l => l.cantidadAlumnos >= cantidad);
    res.json(resultado);
});

// 7) Endpoint para buscar todos los lenguajes por "cantidadAlumnos"
app.get('/api/lenguajes/cantidadAlumnos/:cantidad', (req, res) => {
    const cantidad = parseInt(req.params.cantidad);
    const resultado = [
        ...lenguajesBackend.filter(l => l.cantidadAlumnos >= cantidad),
        ...lenguajesFrontend.filter(l => l.cantidadAlumnos >= cantidad)
    ];
    res.json(resultado);
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port 3000}`);

});
