import React, { useState } from 'react';
import { useTrail, animated } from 'react-spring';
import Force from '../../Images/force.jpg';
import Leaves from '../../Images/leaves.jpg';
import styles from './Landing.module.css';
import cx from 'classnames';



export default ({ dark }) => {
    const items = ['Kah Yap', 'Software', 'Engineer', 'Click Me :)']
    const config = { mass: 5, tension: 2000, friction: 200 }
    const [toggle, set] = useState(true)

    const darkContainer = () => {
      if(dark) {
        return cx(styles.landing_container, styles.dark_landing_container)
      } else {
        return cx(styles.landing_container)
      }
    }

  return (
    <div className={darkContainer()}>
      <div className={styles.left}> 
        <img onClick={() => set(!toggle)} className={styles.hero} src={dark ? Force : Leaves}></img>
      </div>

      <div className={styles.right}>
        { toggle ? 
          <h1> Who Am I? </h1> : 
          <p>
            Et consequat nulla anim ullamco occaecat ex aute anim tempor laborum. Nisi aliquip et ea cillum incididunt. Excepteur eu voluptate amet fugiat aute amet sit veniam amet. Reprehenderit aliqua dolore fugiat aliqua deserunt et irure commodo adipisicing pariatur amet voluptate.
          </p>}
      </div>
    </div>
  )
}