import React from 'react';
import Landing from './LandingPage/Landing';
import Project from './Projects/ProjectContainer';
import Contact from './Contact/Contact';
import Calendar from './GitHubCalendar/Calendar';
import Skills from './Skills/SkillContainer';



export default () => {
    return(
        <div className='main_container'>
            <Landing />
            <Calendar />
            <Project />
            <Skills />
            <Contact />
        </div>
    )
}