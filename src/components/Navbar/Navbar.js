import React from 'react';
import styles from './Navbar.module.css';
import {useSpring, animated} from 'react-spring';


export default () => {
    const props = useSpring({
        marginTop: 0,
        from: {marginTop: -100}
    });

    return(
        <animated.nav className={styles.nav_container} style={props}>
            <ul>
                <li> Home </li>
                <li> About </li>
                <li> Contact </li>
            </ul>
        </animated.nav>
    )
}