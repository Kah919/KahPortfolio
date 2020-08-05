import React, { useContext } from 'react';
import styles from './Skills.module.css';
import cx from 'classnames';
import Context from '../theme-context';

export default () => {
    const { globalState, globalDispatch } = useContext(Context);
    
    const isDark = () => {
        if(globalState.dark) {
            return cx( styles.container, styles.dark)
        }

        return styles.container
    }

    return(
        <div className={ isDark() }>
            <h1> TECHNICAL SKILLS </h1>
            <p>
                JavaScript, React/Redux, Node, Express, Ruby, Ruby on Rails, GitHub, Git, HTML/CSS, Postman, MongoDB, Mongoose, Bootstrap, Semantic UI, Jira, Heroku, Netlify, SQL, Gimp, RawTherapee, Lightroom, Trello, Kanban, GraphQL, Socket.io
            </p>
        </div>
    )
}