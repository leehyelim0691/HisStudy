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
import ProductCategories from './views/ProductCategories';
import ProductSmokingHero from './views/ProductSmokingHero';
import AppFooter from './views/AppFooter';
import ProductHero from './views/ProductHero';
import ProductValues from './views/ProductValues';
import ProductHowItWorks from './views/ProductHowItWorks';
import ProductCTA from './views/ProductCTA';
import AppAppBar from './views/AppAppBar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Bbs from './Bbs';
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
    // <div className="App">
    //   <Router>
    //     <Switch>
    //       <Route exact path="/" component={Main} />
    //       <Route exact path="/bbs" component={Bbs} />
    //       <Redirect to="/" />
    //     </Switch>
    //   </Router>
    //   <Main/>    
    // </div>


//  <BrowserRouter>
//   <Switch>
//     <React.Fragment>
//       <Route exact path="/">
//       <AppAppBar />
//       <ProductHero />
//       <ProductValues />
//       <ProductCategories />
//       <ProductHowItWorks />
//       <ProductCTA />
//       <ProductSmokingHero />
//       <AppFooter />
//       </Route>
//     </React.Fragment>
//     <Route exact path="/Bbs">
//       <Bbs />
//     </Route>
//   </Switch>
// </BrowserRouter> 



<Router>
  <div className="App">
    <AppAppBar/>
    <Switch>
      <Route path="/" exact>
        <ProductHero/>
          <Switch>
            <Route path="/bbs">
              <Bbs/>
            </Route>
          </Switch>
        <ProductValues />
        <ProductCategories />
        <ProductHowItWorks />
          <Switch>
            <Route path="/signup">
              <SignIn/>
            </Route>
          </Switch>
        <ProductCTA />
        <ProductSmokingHero />
        <AppFooter />
      </Route>
      <Route path="/signin">
        <SignIn/>
      </Route>
      <Route path="/signup">
        <SignUp/>
      </Route>
    </Switch>
    </div> 
</Router>
     
    /* <ProductHero/>
    <Switch>
      <Route exact path="/productvalues" component={ProductValues} />
      <Route exact path="/productcategories" component={ProductCategories} />
      <Route exact path="/producthowitworks" component={ProductHowItWorks} />
      <Route exact path="/productcta" component={ProductCTA} />
      <Route exact path="/productsmokinghero" component={ProductSmokingHero} />
      <Route exact path="/appfooter" component={AppFooter} />
      <Redirect to="/" />
    </Switch> */
  



/* <Router> <Route path='/' component={SignPage} /> <Route path='/main' component={MainPage} /> <Route path='/profile' component={ProfilePage} /> </Router> */

  );
}

export default withRoot(App);
