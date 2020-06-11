import React from 'react';

export default ({icon}) => {
    return (
        <li className="nav-item">
            <a href className="icon-button">
                { icon }
            </a>
        </li>
    )
}