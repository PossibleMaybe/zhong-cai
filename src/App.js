import React from 'react';
import { HashRouter, Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Home from './views/home';
import PersonCenter from './views/person-center';
import Help from './views/help';


const ANIMATION_MAP = {
  PUSH: 'forward',
  POP: 'back'
}

const App = () => {

  const Routes = withRouter(({ location, history }) => (
    <TransitionGroup 
      className={'router-wrapper'}
      childFactory={child => {
        return React.cloneElement(child,{classNames: ANIMATION_MAP[history.action]})} }
    >
      <CSSTransition
        timeout={5000}
        classNames={'fade'}
        key={location.pathname}
      >
        <Switch location={location}>
          <Route exact path="/" component={Home}>

          </Route>
          <Route exact path="/person-center" component={PersonCenter}>

          </Route>
          <Route exact path="/help" component={Help}>

          </Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  ));

  return (
    <div className="App">
      <HashRouter>
        <Routes />
      </HashRouter>
    </div>
  );
}

export default App;
