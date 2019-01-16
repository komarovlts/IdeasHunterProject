import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './index.css';
import './App.css';

import PostLogin from './views/Auth/PostLogin';
import Register from './views/Auth/Register';

/* Welcome */
import WelcomeNU from './views/Welcome/WelcomeNU';
import WelcomeEV from './views/Welcome/WelcomeEV';

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

/* Others */
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={Register} />
            <Route exact path='/postlogin' component={PostLogin} />

            <Route path='/welcomenu' component={WelcomeNU} />
            <Route path='/welcomeev' component={WelcomeEV} />


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
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
