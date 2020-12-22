import React, { useState, useContext } from 'react';
import styles from './Project.module.css';
import cx from 'classnames';
import data from './data';
import Context from '../theme-context';
import HorizontalScroll from 'react-scroll-horizontal';

export default (props) => {
    let [project, setProject] = useState('Guess Who Infinite');
    const { globalState, globalDispatch } = useContext(Context);

    const createOptions = () => {
        return data.map(data => {
            return <option value={ data.name } > { data.name } </option>
        })
    }

    const handleChange = event => {
        setProject(event.target.value);
    }

    const findProject = () => {
        return data.find(data => data.name === project);
    }

    const carouselImg = () => {
        return findProject().images.map(image => {
            return <img src={ image } className={ styles.carousel_image } alt="img" />
        })            
    }

    const populateTech = () => {
        return findProject().technology.map(tech => {
            return <li> { tech } </li>
        })            
    }

    const populateLinks = () => {
        return findProject().links.map(tech => {
            return <a href={ tech.link } className={ tech.icon }></a>
        })            
    }

    const populateInfo = () => {
        return (
            <div className={ styles.info_container}>
                <div className={ styles.description }> { 
                    <p> { findProject().description } </p>} 
                </div>

                <div className={ styles.info }>
                    <div className={ styles.technology }> 
                        { <ul> Technology: { populateTech() } </ul> } 
                    </div>

                    <div className={ styles.technology }> 
                        { <ul> Links: { populateLinks() } </ul> } 
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={globalState.dark ? cx(styles.container, styles.dark) : cx(styles.container, styles.light)} id="project">
            <form>
                <select value={ project } onChange={ handleChange }>
                    { createOptions() }
                </select>
            </form>

            {populateInfo()}

            <div className={ styles.carousel_container }>
                <HorizontalScroll>
                    {carouselImg() }
                </HorizontalScroll>
            </div>
        </div>
    )
}