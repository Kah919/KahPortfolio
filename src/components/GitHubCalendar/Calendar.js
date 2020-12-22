import React, { useContext } from 'react'
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from "react-tooltip";
import styles from './Calendar.module.css';
import Context from '../theme-context';
import cx from 'classnames';
import Zoom from 'react-reveal/Zoom';


export default () => {
    const { globalState, globalDispatch } = useContext(Context);

    const isDark = () => {
        if(globalState.dark) {
            return cx(styles.container, styles.dark)
        }

        return cx(styles.container, styles.light)
    }
    
    return(
        <div className={ isDark() }>
            <h1 contenteditable spellcheck="false">
                <span> GitHub Contributions <a href="https://github.com/Kah919" className="fa fa-github"></a> </span> 
            </h1>

            <Zoom>
            <div className={ globalState.dark ? cx(styles.calendar, styles.noBorder) : styles.calendar }>
            <GitHubCalendar username="kah919" blockSize={30} >
            <ReactTooltip delayShow={50} html />
            </GitHubCalendar>
            </div>
            </Zoom>
        </div>
    )
}