import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import "../Landing/landing.module.css"

const LandingPage = () => {
    return (
        <div className="landing-page">
        <Header/>
        <Link to="/videogames">
            <button className='button'> GO </button>
        </Link>
        </div>
    );
}

export default LandingPage;