import React from 'react';

export default ({children}) => {
    return(
        <nav className="navbar">
            <ul className="navbar-nav"> { children } </ul>
        </nav>
    )
}