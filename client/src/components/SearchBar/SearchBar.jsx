import { useState } from "react";
import styles from "../Nav/Nav.module.css";

export default function SearchBar ({onSearch}){

    const[game,setGame]=useState([])

    const HandleChange = (event )=>{
        setGame(event.target.value)
    }
    return(
        <div >
            <input type='search' value={game} onChange={HandleChange} placeholder="Search for Name" className={styles.input} />
            <button onClick={()=>onSearch(game)}className={`${styles.btn} btn btn-primary fs-5`}> Search </button>
        </div>
    )
}