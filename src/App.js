import React from 'react';
import './App.css';
import Welcome from './contents/Welcome';
import NavBar from './components/NavBar';
import EnterTests from './contents/EnterTests';
import ViewTests from './contents/ViewTests';
import Instructions from './contents/Instructions';
import { BrowserRouter as Router, Route, } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path='/'>
          <Welcome />
        </Route>
        <Route exact path='/instructions'>
          <Instructions />
        </Route>
        <Route path='/viewtests'>
          <ViewTests />
        </Route>
        <Route path='/entertests'>
          <EnterTests />
        </Route>
      </div>
    </Router>
  );
}

export default App;