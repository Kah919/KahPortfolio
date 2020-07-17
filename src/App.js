import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/LandingPage/Landing';
import Project from './components/Projects/ProjectContainer';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import GlobalStateProvider from './components/GlobalStateProvider';

function App() {
  const [dark, setDark] = useState(false);

  const toggleMode = () => {
    console.log("CLICKED")
    setDark(!dark);
  }


  return (
    <GlobalStateProvider>
    <Router>
        <Navbar dark={dark} toggleMode={ toggleMode }/>
        <Switch>
          <Route exact path='/projects' component={Project} />
          <Route exact path='/' component={Landing} />
          
        </Switch>
    </Router>
    </GlobalStateProvider>
  );
}

export default App;
