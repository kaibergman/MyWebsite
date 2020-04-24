import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Route, Link, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Projects from './Projects';
import About from './About';


ReactDOM.render(
  <BrowserRouter>
    <Route render={({ location }) => (


      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={3000}
          classNames="fade">
          <Route render={({ location }) => (
            <Switch>
              <Route exact path="/" component={App} />
              <Route path="/Projects" component={Projects} />
              <Route path="/About" component={About} />
            </Switch>
          )} />
        </CSSTransition >
      </TransitionGroup>
    )} />

  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
