import React from 'react';
import Landing from './LandingPage/Landing';
import Project from './Projects/ProjectContainer';
import Contact from './Contact/Contact';

export default () => {
    return(
        <div className='main_container'>
            <Landing />
            <Project />
            <Contact />
        </div>
    )
}