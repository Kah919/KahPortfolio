import React, { useState, useEffect, useContext } from 'react';
import styles from './Project.module.css';
import cx from 'classnames';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import data from './data';
import Context from '../theme-context';



export default (props) => {
    let [project, setProject] = useState('');
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
        if(project !== '') {
            return findProject().images.map(image => {
                return <div data-src={ image } className={ styles.test }/>
            })            
        } else {
            return <h1> Please select a project </h1>
        }
    }

    const populateTech = () => {
        if(project !== '') {
            return findProject().technology.map(tech => {
                return <li> { tech } </li>
            })            
        }
    }

    const populateLinks = () => {
        if(project !== '') {
            return findProject().links.map(tech => {
                return <a href={ tech.link } className={ tech.icon }></a>
            })            
        }
    }
    

    return(
        <div className={ globalState.dark ? cx(styles.project_container, styles.dark) : styles.project_container}>
            <div className={ styles.description }>
                <form>
                    <select value={ project } onChange={ handleChange }>
                        <option> Select A Project </option>
                        { createOptions() }
                    </select>
                </form>

                <div>
                    <div className={ styles.description }> { project !== '' ? <p> { findProject().description } </p> : null} </div>
                    <div className={ styles.info }>
                        <div className={ styles.technology }> { project !== '' ? <ul> Technology: { populateTech() } </ul> : null} </div>
                        <div className={ styles.technology }> { project !== '' ? <ul> Links: { populateLinks() } </ul> : null} </div>
                    </div>
                </div>
            </div>

            <div className={ cx(styles.carousel_container, styles.aws_btn)}>
                <AwesomeSlider bullets={ false } className={ styles.aws_btn } >
                    { carouselImg() }
                </AwesomeSlider>
            </div>
        </div>
    )
}