import React, { useState, useContext } from 'react';
import Force from '../../Images/force.jpg';
import Leaves from '../../Images/leaves.jpg';
import styles from './Landing.module.css';
import cx from 'classnames';
import Context from '../theme-context';

export default ({ dark }) => {
    const [toggle, set] = useState(true)
    const { globalState, globalDispatch } = useContext(Context);

    const darkContainer = () => {
      if(globalState.dark) {
        return cx(styles.landing_container, styles.dark_landing_container)
      } else {
        return cx(styles.landing_container)
      }
    }

  return (
    <div id="home" className={darkContainer()}>
      <div className={styles.left}> 
        <img onClick={() => set(!toggle)} className={styles.hero} src={ globalState.dark ? Force : Leaves }></img>
      </div>

      <div className={styles.right}>
        { toggle ? 
          <div> 
            <h1> <span> Kah Yap </span> </h1>
            <h5> Software Engineer </h5>
          </div> : 
          <div className={ styles.text_container}>
            <p>Welcome to my portfolio 2.0, please enjoy your stay in either light or dark mode by toggling the icon on the navbar. </p>

            <br></br>

            <p>My name is Kah a software engineer who focuses on JavaScript and React but also have experience with Ruby on Rails and Express.</p> 
            
            <br></br>

            <p>During this pandemic I have spent my time learning new skills, participating in hackathons, and recreating my portfolio.</p>

            <br></br>

            <p>There is so much that I'd like to talk about so please check out the contacts page :)</p>

            <br></br>

            <a href="https://kahmyap.herokuapp.com/"> Old Portfolio </a>
          </div>}
      </div>
    </div>
  )
}

