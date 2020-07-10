import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/LandingPage/Landing';

function App() {
  const [dark, setDark] = useState(false);

  const toggleMode = () => {
    console.log("CLICKED")
    setDark(!dark);
  }

  return (
    <div className="main_container">
      { dark ? console.log("DARK") : console.log("Light") }
      <Navbar dark={dark} toggleMode={ toggleMode }/>
      {/* <Landing dark={dark} />
      <Landing dark={dark} /> */}
    </div>
  );
}

export default App;
