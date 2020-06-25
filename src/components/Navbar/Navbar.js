import React from 'react';
import styles from './Navbar.module.css';


export default () => {
    return(
        <nav className={styles.nav_container}>
            <div className={styles.logo}>KY</div>
            
            <ul>
                <li> Home </li>
                <li> About </li>
                <li> Contact </li>
            </ul>

            <div className={styles.social_container}>
                <a href="#" className="fa fa-instagram"></a>
                <a href="#" className="fa fa-github"></a>
                <a href="#" className="fa fa-linkedin"></a>
            </div>
            
        </nav>
    )
}