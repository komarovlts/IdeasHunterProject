import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { PrivateRoute } from './components';
import Navbar from "./components/Navbar/Navbar";

/* Auth */
import { history } from './auth/Helpers';
import { alertActions } from './auth/Actions';
import { HomePage } from './views/Auth/HomePage';
import { LoginPage } from './views/Auth/LoginPage';
import { RegisterPage } from './views/Auth/RegisterPage';

/* Welcome */
import WelcomeNU from './views/Welcome/WelcomeNU';
import WelcomeEV from './views/Welcome/WelcomeEV';
import WelcomeADM from './views/Welcome/WelcomeADM';

/* Ideas */
import IndexIdea from './views/Ideas/Index';
import ShowIdea from './views/Ideas/Show';
import EditIdea from './views/Ideas/Edit';
import CreateIdea from './views/Ideas/Create';
import IdeaDetails from './views/Ideas/Details';

/* Challenges */
import IndexChallenge from './views/Challenges/Index';
import ShowChallenge from './views/Challenges/Show';
import EditChallenge from './views/Challenges/Edit';
import CreateChallenge from './views/Challenges/Create';
/* Normal User Challenges */
import IndexChallengeNU from './views/Challenges/NormalUser/Index';
import ShowChallengeNU from './views/Challenges/NormalUser/Show';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';


class App extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <div>
        <Navbar />
        {alert.message &&
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        }
        <Router history={history}>
          <div>
            <PrivateRoute exact path="/" component={LoginPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />

            <Route path='/welcomenu' component={WelcomeNU} />
            <Route path='/welcomeev' component={WelcomeEV} />
            <Route path='/welcomeadm' component={WelcomeADM} />

            <Route path='/indexidea' component={IndexIdea} />
            <Route path='/editidea/:id' component={EditIdea} />
            <Route path='/createidea' component={CreateIdea} />
            <Route path='/showidea/:id' component={ShowIdea} />
            <Route path='/ideadetails/:id' component={IdeaDetails} />

            <Route path='/indexchallenge' component={IndexChallenge} />
            <Route path='/showchallenge/:id' component={ShowChallenge} />
            <Route path='/editchallenge/:id' component={EditChallenge} />
            <Route path='/createchallenge' component={CreateChallenge} />

            <Route path='/indexchallengenu' component={IndexChallengeNU} />
            <Route path='/showchallengenu/:id' component={ShowChallengeNU} />
          </div>
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 
