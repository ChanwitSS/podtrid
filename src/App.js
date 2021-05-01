import React from 'react'
import {Switch, Route} from 'react-router-dom'
import home from './Home'
import './css/home.css';

function App() {
  return (
    <Switch>
        <Route exact path="/" component={home} />
    </Switch>
  );
}

export default App;
