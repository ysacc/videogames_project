const { VideoGame }= require("../db");

const getAllGames = async ()=>{
    try {
        // Obtener los videojuegos de la base de datos
        const videogames = await VideoGame.findAll({
            include: Genres
        });
        // res.json(videogames);
        return videogames;
    } catch (error) {
        // console.error(error);
        res.status(404).send('Error al obtener los videojuegos');
    }
}

module.exports={
    getAllGames
}