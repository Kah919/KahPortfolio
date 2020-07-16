import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/LandingPage/Landing';
import Project from './components/Projects/ProjectContainer';

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";


function App() {
  const [dark, setDark] = useState(false);

  const toggleMode = () => {
    console.log("CLICKED")
    setDark(!dark);
  }

  const MyContext = React.createContext(dark);

  return (
    <Router>
        <Navbar dark={dark} toggleMode={ toggleMode }/>
        <Switch>
          <Route exact path='/projects'><Project /></Route>
          <Route exact path='/'><Landing /></Route>
          
        </Switch>
    </Router>
  );
}

export default App;
