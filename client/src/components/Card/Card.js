import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Card.module.css"


const Card = ({ id,name,gender,image,description,rating,released }) => {

    return (
        <div className={styles.containt}>
            <div className={`${styles.card} d-flex flex-column `} >
            <img className={`${styles.img} img-fluid`} src={image} alt="img" />
            <div className={`${styles.content}`}>
                <Link to={`/detail/${id}`}>
                <h2 className={styles.name}>{name}</h2>
                </Link>
                <div className="">
                <h3 className={styles.gender}>Rating: {rating}</h3>
                <h3 className={styles.gender}>Gender : {gender}</h3>
                <h3 className={styles.gender}>Descrption : {description}</h3>
                <h3 className={styles.gender}>Released : {released}</h3>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Card;