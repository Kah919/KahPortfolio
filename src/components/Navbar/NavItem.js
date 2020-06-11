import React, {useState} from 'react';

export default ({icon, children}) => {
    const [open, setOpen] = useState();
    return (
        <li className="nav-item">
            <a href className="icon-button" onClick={() => setOpen(!open)}>
                { icon }
            </a>

            {open && children}
        </li>
    )
}