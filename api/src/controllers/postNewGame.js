const { VideoGame } = require ("../models/Videogame");

const postNewGame = async()=>{
    try {
        const { name, description, releaseDate, rating, platforms, genres,image } = req.body;
        if (!name || !description || !releaseDate || !rating || !platforms || !genres || !image ) {
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

        return res.status(201).send("Game is created");
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ocurrió un error al crear el videojuego' });
    }
}

module.exports = {
    postNewGame
}