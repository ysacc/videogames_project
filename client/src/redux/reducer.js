import {GET_ALL_GAMES,ADD_GAME,GET_DETAIL,GET_GENRES}  from "../redux/actions/types";

const initialState = {
    games: [],
    genres: [],
}

const rootReducer = (state=initialState,action)=>{
    switch(action.type){
        case GET_ALL_GAMES:
            return {
                ...state,
                games: action.payload.games
            }
        case ADD_GAME:
            return {
                ...state,
                genres: [...state.genres,action.payload.genres]
            }
        default:
            return {...state}
        }
    }
export default rootReducer;