import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
// import { IconName } from "react-icons/fa";


export default function Nav({onSearch}){
    return(
        <nav className={styles.nav}>
            <a className={styles.logo} href>
                <img className={styles.img}  src="images/logo2.png" alt="logo" /> 
            </a>
            <Link to ="/" className={styles.link}> Exit </Link>
            <Link to ="/videogames" className={styles.link} > Home </Link>
            <Link to ="/genres" className={styles.link}>Genres </Link>
            <Link to ="/about" className={styles.link}> About Me</Link>
            <a href="https://github.com/ysacc" className={styles.link} target="blank"> GitHub</a>
            <SearchBar onSearch={onSearch}/>
        </nav>
    )
}
