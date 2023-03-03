import React from "react";
import Card from '../Card/Card';
import styles from "./Cards.module.css"

export default function Cards({games}) {
    return( 
        <div>
            <h2 className={styles.title}>Games</h2>
            <div className={styles.cards}>
                {
                games.map(({id,name,gender,image}) => {
                return <Card
                    id ={id}
                    name={name}
                    gender={gender}
                    image={image}
                    />
                })
                }
            </div>
        </div>
    )
}