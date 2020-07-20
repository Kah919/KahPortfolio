import React, { useState, useEffect } from 'react';
import styles from './Project.module.css';
import cx from 'classnames';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import data from './data';

export default (props) => {
    let [project, setProject] = useState('');

    const createOptions = () => {
        return data.map(data => {
            return <option value={ data.name } placeholder="---" > { data.name } </option>
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
    

    return(
        <div className={ styles.project_container}>
            <div className={ styles.description }>
                <form>
                    <select value={ project } onChange={ handleChange }>
                        { createOptions() }
                    </select>
                </form>

                <div>
                    <div className={ styles.description }> { project !== '' ? <p> { findProject().description } </p> : null} </div>
                    <div className={ styles.technology }> { project !== '' ? <ul> Technology: { populateTech() } </ul> : null} </div>
                </div>
            </div>

            <div className={ cx(styles.carousel_container, styles.aws_btn)}>
                <AwesomeSlider bullets={ false }>
                    { carouselImg() }
                </AwesomeSlider>
            </div>
        </div>
    )
}