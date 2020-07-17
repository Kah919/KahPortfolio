import React, { useState, useEffect } from 'react';
import styles from './Project.module.css';
import cx from 'classnames';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import data from './data';

export default (props) => {

    return(
        <div className={ styles.project_container}>
            { console.log(data) }
            <div className={ styles.description }>
                <label for="projects"> Projects </label>

                <select name="projects" id="projects">
                    <option value="guess"> Guess Who Infinite </option>
                    <option value="corona"> COVID-19 Visualizer </option>
                    <option value="name"> NameRater </option>
                    <option value="hangry"> Hangry </option>
                    <option value="ohsnap"> OhSnap </option>
                    <option value="stock"> Virtual Stock </option>
                </select>
            </div>

            <div className={ styles.carousel_container}>

            </div>
        </div>
    )
}