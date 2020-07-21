import React, { useState, useContext } from 'react';
import { useTrail, animated } from 'react-spring';
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
    <div className={darkContainer()}>
      <div className={styles.left}> 
        <img onClick={() => set(!toggle)} className={styles.hero} src={ globalState.dark ? Force : Leaves }></img>
      </div>

      <div className={styles.right}>
        { toggle ? 
          <h1> Who Am I? </h1> : 
          <p>
            Welcome to my portfolio 2.0, please enjoy your stay in either light or dark mode by toggling the icon on the navbar. 

            My name is Kah a software engineer who focuses on JavaScript and React but also have experience with Ruby on Rails and Express. During this pandemic I have spent my time learning new skills, participating in hackathons, and recreating my portfolio.

            There is so much that I'd like to talk about so please check out the contacts page :)

          </p>}
      </div>
    </div>
  )
}

