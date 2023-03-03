const { default: axios } = require("axios");
const {API_KEY} = process.env;

const controllerGames = async ()=>{
    let games = []
    try {
        for(let i = 1;i<=5.;i++){
        const response = await axios(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`)
        const results = response.data.results
        games= [...games,...results];
        }
        return games 
    } catch (error) {
        return "no se encontro juegos"
    }
    
}

module.exports = {
    controllerGames
}