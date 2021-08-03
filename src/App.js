// import logo from './logo.svg';
// import './App.css';
// import './css/styles.css';
// import './css/bootstrap-theme.css';
// import './css/bootstrap-theme.css.map';
// import './css/bootstrap-theme.min.css';
// import './css/bootstrap.css';
// import './css/bootstrap.css.map';
// import './css/bootstrap.min.css';
// import Main from "./pages/main.js";
// import Bbs from "./pages/bbs.js";
// import {
//   Route,
//   Switch,
//   Redirect,
//   BrowserRouter as Router
// } from "react-router-dom";

import withRoot from './withRoot';
// --- Post bootstrap -----
import React from 'react';
import MainMajor from './views/MainMajor';
import MainQuestion from './views/MainQuestion';
import AppFooter from './views/AppFooter';
import MainPage from './views/MainPage';
import MainFunction from './views/MainFunction';
import MainRanking from './views/MainRanking';
import MainOffer from './views/MainOffer';
import AppAppBar from './views/AppAppBar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Bbs from './Bbs';
import Terms from './Terms';
import {
  Route,
  Switch,
  Redirect,
  Link,
  BrowserRouter as Router,
  BrowserRouter
} from "react-router-dom";

function App() {
  return (

    <Router>
      <div className="App">
        <AppAppBar/>
        <Switch>
          <Route path="/" exact>
            <MainPage/>
            <Switch>
                <Route path="/signup">
                  <SignUp/>
                </Route>
              </Switch>
            <MainFunction />
            <MainMajor />
            <MainRanking />
              <Switch>
                <Route path="/signup">
                  <SignIn/>
                </Route>
              </Switch>
            <MainQuestion />
            <MainOffer />
            <AppFooter />
          </Route>
          <Route path="/signin">
            <SignIn/>
          </Route>
          <Route path="/signup">
            <SignUp/>
          </Route>
          <Route path="/bbs">
            <Bbs/>
          </Route>
        </Switch>
        </div> 
    </Router>
     
  );
}

export default withRoot(App);
