import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom'

import Login from './login/login.component'
import Signup from './register/signup.component'
import Home from './home/home.component'
import PrivateRoute from './privateRoute/privateRoute.js'

function App() {
  return (
   <Router>
     <div>
     <Route  exact path="/" component={Login} />
     <Route  exact path="/signup" component={Signup} />
     <PrivateRoute exact path="/home" component={Home} />
    
     </div>
   </Router>
  );
}

export default App;
