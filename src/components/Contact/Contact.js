import React, { useState, useContext } from 'react';
import styles from './Contact.module.css';
import Context from '../theme-context';
import cx from 'classnames';
import Fade from 'react-reveal/Fade';


export default () => {
    let [print, setPrint] = useState('');
    const { globalState, globalDispatch } = useContext(Context);
    
    const type = () => {
        return(
            <p className="type"> { print } </p>
        )
    }
  
    const click = e => {
        setPrint(e.target.classList.contains("fa-phone") ? "718-708-1881" : "kahyap13@gmail.com")
    }

  return(
      <div id="contact" className={ globalState.dark ? cx(styles.dark, styles.contact_container) : styles.contact_container }>
        <div className={ styles.icons }>
        <Fade top>
        {print ? type() : <p className="type">You can contact me on</p>}
        </Fade>
        <div className={ styles.bubble_container}>
          <Fade left cascade>
          <a href="https://github.com/kah919" target="_blank" className="fa fa-github-alt" />
          <a href="https://www.linkedin.com/in/kah-m-yap/" target="_blank" className="fa fa-linkedin" />
          <a className="fa fa-phone" onMouseEnter={ click }/>
          <a className="fa fa-envelope" onMouseEnter={ click }/>
          </Fade>
        </div>
      </div>
    </div>
  )
}