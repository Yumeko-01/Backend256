const express = require('express');
const router = express.Router();
const bicicletaController = require('../controllers/bicicletaController');

// Rutas para las bicicletas
router.get('/', bicicletaController.obtenerBicicletas);
router.post('/', bicicletaController.crearBicicleta);
router.put('/:id', bicicletaController.actualizarBicicleta);
router.delete('/:id', bicicletaController.eliminarBicicleta);

module.exports = router;
