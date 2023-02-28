const axios = require("axios");
const {API_KEY} = process.env;

const getGameByName = async(req,res)=>{
    const {game} = req.query;
    try {
        // Obtener los videojuegos que coincidan con el nombre especificado
        const response = await axios (`https://api.rawg.io/api/games?search=${game}?api_key=${API_KEY}`);
        const data = response.data;
        if (!data){
            res.status(404).send("No se encontraron resultados");
        }
        else{
            const games = data.map(game=>{})
            res.status(200).json(games)
        } 
    }
    catch (error) {
        // console.error(error);
        // res.status(400).send('Error al buscar los videojuegos');
        res.status(404).json({error:error.message})
    }
}

module.exports = {
    getGameByName
}