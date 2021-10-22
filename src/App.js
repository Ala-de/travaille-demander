import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from "./navgation.js"
import about from "./about.js"
import episode from "./Episode.js"
import home from "./Home.js"

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Navigation/>
          <Route path ="/about" component={about}/>
          <Route path ="/" component={home}/>
          <Route path ="/Episode" component={episode}/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
