import React, { useContext } from 'react'
import GitHubCalendar from 'react-github-calendar';
import styles from './Calendar.module.css';
import Context from '../theme-context';
import cx from 'classnames';

export default () => {
    const { globalState, globalDispatch } = useContext(Context);

    const isDark = () => {
        if(globalState.dark) {
            return cx(styles.container, styles.dark)
        }

        return styles.container
    }
    
    return(
        <div className={ isDark() }>
            <h1> GitHub Contributions </h1>
            <GitHubCalendar username="kah919" blockSize={20} />
        </div>
    )
}