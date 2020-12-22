import React from 'react';
import Landing from './LandingPage/Landing';
import Project from './ProjectCarousel/ProjectCarousel';
import Contact from './Contact/Contact';
import Calendar from './GitHubCalendar/Calendar';

export default () => {
    return(
        <div className='main_container'>
            <Landing />
            <Calendar />
            <Project />
            <Contact />
        </div>
    )
}