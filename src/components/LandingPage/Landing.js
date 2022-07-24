import React, { useState, useContext } from 'react';
import styles from './Landing.module.css';
import cx from 'classnames';
import Context from '../theme-context';

export default ({ dark }) => {
    const [toggle, set] = useState(true)
    const { globalState, globalDispatch } = useContext(Context);
    const { landing_container, dark_landing_container, banner} = styles;
    const darkContainer = () => {
      if(globalState.dark) {
        return cx(landing_container, dark_landing_container)
      } else {
        return cx(landing_container)
      }
    }

  return (
    <div id="home" className={darkContainer()}>

      <div className={banner}>
          <h1> <span> Kah Yap </span> </h1>
          <h5> Software Engineer </h5>
      </div>
    </div>
  )
}

