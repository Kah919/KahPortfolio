import React from 'react';

export default ({children, leftIcon, rightIcon}) => {
    return(
        <a href="#" className="menu-item">
            {/* <span className="icon-button">{leftIcon}</span> */}
            {children}
            {/* <span className="icon-button">{rightIcon}</span> */}
        </a>
    )
}