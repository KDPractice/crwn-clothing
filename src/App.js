import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Homepage from './pages/homepage/Homepage';

const HatsPage =()=> {
  return (
    <div><h1>Hats Page</h1></div>
  )
}
<div>
<h1>HATES PAGE</h1>
</div>


function App() {
  return (
    <>
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/hats' component={HatsPage} />
    </Switch>
    </>
  );
}

export default App;
