import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/LandingPage/Landing';
import Project from './components/Projects/ProjectContainer';
// import Project from '.components/ProjectCarousel/ProjectCarousel.js';
import Contact from './components/Contact/Contact';
import Main from './components/Container';

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import GlobalStateProvider from './components/GlobalStateProvider';

function App() {
  const [dark, setDark] = useState(false);

  const toggleMode = () => {
    setDark(!dark);
  }


  return (
    <GlobalStateProvider>
    <Router>
        <Navbar dark={dark} toggleMode={ toggleMode }/>
        <Switch>
          <Route exact path='/projects' component={Project} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/landing' component={Landing} />
          <Route exact path='/' component={Main} />
        </Switch>
    </Router>
    </GlobalStateProvider>
  );
}

export default App;
