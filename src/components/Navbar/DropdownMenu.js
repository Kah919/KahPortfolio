import React, {useState} from 'react';
import DropdownItem from './DropdownItem';
import { CSSTransition } from 'react-transition-group';

export default () => {
    const [activeMenu, setActiveMenu] = useState('main')
    return(
        <div className="dropdown">
            <DropdownItem>My Profile</DropdownItem>
            <DropdownItem leftIcon={"x"} rightIcon={"x"}>
                
            </DropdownItem>
        </div>
    )
}