const { Router } = require('express');
const { Videogame, Genres } = require('../db');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/videogames',async(req,res)=>{
    try {
        // Obtener los videojuegos de la base de datos
        const videogames = await Videogame.findAll({
            include: Genres
        });
        res.json(videogames);
    } catch (error) {
        console.error(error);
        res.status(404).send('Error al obtener los videojuegos');
    }
})
router.get('/videogames/:idVideogame', async (req, res) => {
    try {
      // Obtener el videojuego especificado por ID
        const videogame = await Videogame.findByPk(req.params.idVideogame, {
        include: Genre
        });
        if (videogame) {
        res.json(videogame);
        } else {
            res.status(404).send('Videojuego no encontrado');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener el videojuego');
    }
});
router.get('/videogames/name', async (req, res) => {
    try {
      // Obtener los videojuegos que coincidan con el nombre especificado
        const videogames = await Videogame.findAll({
            where: {
            name: {
                [Op.iLike]: `%${req.query.name}%`
            }
            },
            limit: 15,
            include: Genres
        });
        if (videogames.length > 0) {
            res.json(videogames);
        } else {
            res.status(404).send('Videojuegos no encontrados');
        }
    } catch (error) {
        console.error(error);
        res.status(400).send('Error al buscar los videojuegos');
    }
});
router.post('/videogames', async (req, res) => { 
    try {
        const { name, description, releaseDate, rating, platforms, genres,image } = req.body;
        if (!name || !description || !released || !rating || !platforms || !genres) {
            return res.status(400).json({ message: 'Debe ingresar todos los datos necesarios' });
        }
        // Crear el videojuego en la base de datos
        const newVideoGame = await VideoGame.create({
            name,
            description,
            released,
            rating,
            platforms
        });

        // Obtener los géneros a partir de sus nombres y relacionarlos con el videojuego
        const genreNames = genres.split(',');
        const foundGenres = await Promise.all(genreNames.map(name => Genre.findOne({ where: { name } })));
        await newVideoGame.addGenres(foundGenres.filter(genre => genre)); // Filtrar géneros que no existen en la base de datos

        return res.status(201).json(newVideoGame);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ocurrió un error al crear el videojuego' });
    }
});
router.get('/', async (req, res) => {
    try {
        let genres = [];
    
        // Verificar si hay géneros en la base de datos
        const dbGenres = await Genres.findAll();
    
        if (dbGenres.length > 0) {
            genres = dbGenres.map(genre => genre.name);
        } else {
        // Si no hay géneros en la base de datos, obtenerlos de la API y guardarlos en la base de datos
        const response = await axios.get('https://api.rawg.io/api/genres');
        genres = response.data.results.map(result => result.name);

        await Promise.all(
            genres.map(name => Genres.create({ name }))
        );
        }
    
        return res.status(200).json(genres);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ocurrió un error al obtener los géneros' });
    }
});

module.exports = router;
