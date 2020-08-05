import React, { useContext } from 'react';
import styles from './Skills.module.css';
import cx from 'classnames';
import Context from '../theme-context';
import { Parallax, Background } from 'react-parallax';
import spices from '../../Images/spices.jpg';
import cookie from '../../Images/cookie.jpg';

export default () => {
    const { globalState, globalDispatch } = useContext(Context);
    
    const isDark = () => {
        if(globalState.dark) {
            return cx( styles.container, styles.dark)
        }

        return styles.container
    }

    return(
        <Parallax
            blur={{min: 0, max: 5}}
            bgImage={cookie}
            bgImageAlt="oreo"
            strength={800}
        >
        <div className={ isDark() }>
            <h1> TECH STACK </h1>
            <h2> PRIMARY </h2>
            <p>
                JavaScript, React/Redux, Node, Express, Ruby, Ruby on Rails, GitHub, Git, HTML/CSS
            </p>

            <h2> SECONDARY </h2>
            <p> Postman, MongoDB, Mongoose, Bootstrap, Semantic UI, Jira, Heroku, Netlify, SQL, Gimp, RawTherapee, Lightroom, Trello, Kanban, GraphQL, Socket.io </p>
        </div>
        </Parallax>
    )
}