const { Videogame }= require("../db");
const {controllerGames} = require ("../controllers/controllerGames")


const getAllGames = async (req,res)=>{
    const {name} = req.query;
    if(!name){
    try {
        // Obtener los videojuegos de la base de datos
        let videogames = await Videogame.findAll();
        const gamesforApi = await controllerGames()
        videogames = [...videogames,...gamesforApi];
        res.status(200).json({videogames})
    } catch (error) {
        console.error(error);
        res.status(404).send('Error al obtener los videojuegos');
    }}
    else{
        try {
            // Obtener los videojuegos que coincidan con el nombre especificado
            const response = await axios (`https://api.rawg.io/api/games/${name}?key=${API_KEY}`);
            const data = response.data;
            if (!data){
                res.status(404).send("No se encontraron resultados");
            }
            else{
                res.status(200).json(data)
            } 
        }
        catch (error) {
            res.status(404).json({error:error.message})
        }
    }
}

module.exports={
    getAllGames
}