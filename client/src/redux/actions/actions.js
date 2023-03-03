import {GET_ALL_GAMES,ADD_GAME,GET_DETAIL,GET_GENRES}  from '../actions/types';
import axios from "axios";

export const getAllGames = ()=>{
    return async function (dispatch) {
        try {
            let response = await axios.get("http://localhost:3001/videogames")
            return dispatch(response.data)
        } catch (error) {
            return "no se encuentran los juegos"
        } 
    }
};
export const addGame = (name)=>{
    return{
        type:ADD_GAME,
        payload:name
    }
}
export const getDetail = (name)=>{
    return{
        type:GET_DETAIL,
        payload:name
    }
}
export const getGenres = ()=>{
    return async function (dispatch) {
        try {
            let response = await axios.get("http://localhost:3001/videogames")
            return dispatch(response.data.results)
        } catch (error) {
            return "no se encuentran los juegos"
        } 
    }
}
