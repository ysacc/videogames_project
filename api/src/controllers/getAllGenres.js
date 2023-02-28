const { Genres } = require("../models/Genres");

const getAllGenres = async(req, res)=>{
    try {
        let genres = [];
    
        // Verificar si hay géneros en la base de datos
        const dbGenres = await Genres.findAll();
    
        if (dbGenres.length > 0) {
            genres = dbGenres.map(genre => genre.name);
        } else {
        // Si no hay géneros en la base de datos, obtenerlos de la API y guardarlos en la base de datos
        const response = await axios.get(`https://api.rawg.io/api/genres?api_key=${API_KEY}`);
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
}

module.exports = {
    getAllGenres
}