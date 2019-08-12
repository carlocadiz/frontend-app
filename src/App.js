import React from 'react';
import ReactDOM from "react-dom";
import { Route, Switch, Redirect } from "react-router-dom";

import { SignIn, SignUp, ForgotPassword, Dashboard, Exchange, Stats } from './pages';
import './App.scss';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route path="/signin" component={SignIn}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/forgotpassword" component={ForgotPassword}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/exchange" component={Exchange}/>
          <Route path="/stats" component={Stats}/>

          <Route render={ props => <Redirect to={{ pathname: '/signin', state: { from: props.location } }} /> } />
        </Switch>
    </div>
  );
}

export default App;
