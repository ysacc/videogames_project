const axios = require("axios");
const {API_KEY} = process.env;


const getGameById = async (req,res)=>{
    try {
        const { id } = req.params;
        const response = await axios(`https://api.rawg.io/api/games/${id}?api_key=${API_KEY}`);
        const data = response.data
        const videogameById = {
            id: data.id,
            name: data.name,
            description: data.description,
            image: data.image,
            platforms: data.platforms,
            releaseDate: data.releaseDate,
            rating:data.rating
        }
        res.status(200).json(videogameById)
    } 
    catch (error) {
        res.status(404).send("Algo salió mal")
    }
}

module.exports = {
    getGameById
}
