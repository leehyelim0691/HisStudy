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
import Writebbs from './Writebbs';
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
      <Route path="/" exact>
        <AppAppBar/>
          <Switch>
          <Route path="/write">
              <Writebbs/>
            </Route>
            <Route path="/bbs">
              <Bbs/>
            </Route>
            <Route path="/signin">
              <SignIn/>
            </Route>
            <Route path="/signup">
              <SignUp/>
                <Switch>
                  <Route path="/signin">
                    <SignIn/>
                  </Route>
                </Switch>
            </Route>
          </Switch>
        </Route>
        <Switch>
          <Route path="/" exact>
            <MainPage/>
            <Switch>
                <Route path="/signup">
                  <SignUp/>
                    <Switch>
                      <Route path="/signin">
                        <SignIn/>
                      </Route>
                    </Switch>
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
              <Switch>
                <Route path="/signin">
                  <SignIn/>
                </Route>
              </Switch>
          </Route>
          <Route path="/bbs">
            <Bbs/>
          </Route>
          <Route path="/write">
            <Writebbs/>
          </Route>
        </Switch>
        </div> 
    </Router>
     
  );
}

export default withRoot(App);