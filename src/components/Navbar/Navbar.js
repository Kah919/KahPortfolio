import React, { useState, useEffect, useContext } from 'react';
import styles from './Navbar.module.css';
import cx from 'classnames';
import { Link as Download } from 'react-router-dom'
import Context from '../theme-context';
import resume from '../../Images/resume3.pdf';
import { Link, animateScroll as scroll } from "react-scroll";
import DarkModeToggle from "react-dark-mode-toggle";


export default ({toggleMode, dark}) => {
    const [update, setUpdate] = useState(dark);
    const { globalState, globalDispatch } = useContext(Context);
    useEffect(() => { setUpdate(dark) }, [dark])

    const container = () => {
        return globalState.dark ? cx(styles.nav_container, styles.dark_container) : styles.nav_container
    }

    return(
        <nav className={ container() } >

        <DarkModeToggle
            onChange={() => globalDispatch({ type: 'TOGGLE'})}
            checked={globalState.dark}
            size={60}
        />
            
            <ul>
                <Link 
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                > Home </Link>

                <Download to={ resume } target="_blank" download> Resume </Download>

                <Link 
                    activeClass="active"
                    to="project"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                > Project </Link>
                
                <Link 
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                > Contact </Link>
            </ul>

            <div className={styles.social_container}>
                <a href="#" className="fa fa-instagram"></a>
                <a href="https://github.com/Kah919" className="fa fa-github"></a>
                <a href="https://www.linkedin.com/in/kah-m-yap/" className="fa fa-linkedin"></a>
            </div>
            
        </nav>
    )
}