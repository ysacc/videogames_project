const axios = require("axios");
const {API_KEY} = process.env;

const getGameByName = async(req,res)=>{
    try {
        // Obtener los videojuegos que coincidan con el nombre especificado
        const gameByName = await Videogame.findAll({
            where: {
            name: {
                [Op.iLike]: `%${req.query.name}%`
            }
            },
            limit: 15,
            include: Genres
        });
        if (vgameByName.length > 0) {
            // res.json(videogames);
            return gameByName;
        } else {
            res.status(404).send('Videojuegos no encontrados');
        }
    } catch (error) {
        // console.error(error);
        // res.status(400).send('Error al buscar los videojuegos');
        res.status(404).json({error:error.message})
    }
}

module.exports = {
    getGameByName
}