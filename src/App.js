import React from 'react';
import Navbar from './components/Navbar/Navbar';
import NavItem from './components/Navbar/NavItem';
import DropdownMenu from './components/Navbar/DropdownMenu';


function App() {
  return (
    <div>
      <Navbar>
        <NavItem icon=":)" />
        <NavItem icon=":|" />
        <NavItem icon=":(" />
        <NavItem icon="owo" >
          <DropdownMenu />
        </NavItem>
      </Navbar>
    </div>
  );
}

export default App;
