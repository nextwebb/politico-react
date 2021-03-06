import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/navbarComponent/navbar';
import Home from './components/homeComponent/home';
import Signup from './components/signupComponent/signup';
import Login from './components/loginComponent/login';
import Parties from './components/partiesComponent/parties';
import EditPartyComponent from './components/editPartyComponent/editParty';
import Candidates from './components/candidatesComponent/candidates';
import Results from './components/resultsComponent/results';
import Profile from './components/profileComponent/profile';
import './scss/main.scss';

const NotFound = () => <div>Page not found: 404</div>;

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/candidates" component={Candidates} />
        <Route path="/profile" component={Profile} />
        <Route path="/results" component={Results} />
        <Route path="/parties" exact component={Parties} />
        <Route path="/parties/edit" component={EditPartyComponent} />
        <Route path="/parties/new" component={EditPartyComponent} />
        <Route component={NotFound} />
      </Switch>
      <footer className="footer">
        <div className="mail-block ">
          <div className="input-field">
            <label htmlFor="user-email">
              Subscribe to our news letter
              <input type="email" name="userEmail" id="user-email" />
            </label>
            <button className="btn btn-icon" id="email-subscribe" type="button">
              <i className="zmdi zmdi-mail-send icon icon-right" />
            </button>
          </div>
        </div>
        <p className="footer-logo-text">&copy; 2019 Politico</p>
      </footer>
    </div>
  </Router>
);

export default App;
