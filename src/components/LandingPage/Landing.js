import React, { useState } from 'react';
import { useTrail, animated } from 'react-spring';
import Force from '../../Images/force.jpg';
import Leaves from '../../Images/leaves.jpg';
import styles from './Landing.module.css';



export default () => {
    const items = ['Kah Yap', 'Software', 'Engineer', 'Click Me :)']
    const config = { mass: 5, tension: 2000, friction: 200 }

    const [toggle, set] = useState(true)
    const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 40 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })

  return (
    <div className={styles.landing_container}>
      <div className={styles.left}> 
        
        <div className={styles.trails_main} onClick={() => set(state => !state)}>
          <div className={styles.text_container}>
            {trail.map(({ x, height, ...rest }, index) => (
              <animated.div
                key={items[index]}
                className={styles.trails_text}
                style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                <animated.div style={{ height }}>{items[index]}</animated.div>
              </animated.div>
            ))}
          </div>
        </div>

        <img className={styles.hero} src={toggle ? Force : Leaves}></img>
      </div>

      <div className={styles.right}>
        <h1> Who Am I? </h1>
        <p>
          Et consequat nulla anim ullamco occaecat ex aute anim tempor laborum. Nisi aliquip et ea cillum incididunt. Excepteur eu voluptate amet fugiat aute amet sit veniam amet. Reprehenderit aliqua dolore fugiat aliqua deserunt et irure commodo adipisicing pariatur amet voluptate.
        </p>
      </div>
    </div>
  )
}