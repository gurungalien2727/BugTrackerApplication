import React from 'react';
import Home from './components/Home';
import AddBug from "./components/AddBug";
import Welcome from './Welcome';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';

const Routes =()=>{
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/Home" component={AddBug} />
          <Route path="/Dash" component={NotFound} />
          
        </Switch>
      </BrowserRouter>
    );
};
export default Routes;