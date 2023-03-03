const { Router } = require('express');
const { getAllGames } = require('../controllers/getAllGames');
const { getAllGenres } = require('../controllers/getAllGenres');
const { getGameById } = require('../controllers/getGameById');
const { postNewGame } = require('../controllers/postNewGame');
const { Videogame, Genres } = require('../db');
const {API_KEY} = process.env;
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/videogames',getAllGames); 

router.get('/videogames/:id', getGameById);

router.post('/videogames', postNewGame);

router.get('/genres',getAllGenres );

module.exports = router;
