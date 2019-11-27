import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

import Landing from './pages/Landing';
import Developer from './pages/Developer';
import Musician from './pages/Musician';
import Teacher from './pages/Teacher';
import Layout from './components/Layout';

const RouteWithLayout = ({layout, component, ...rest}) => (
  <Route {...rest} render={(props) =>
    React.createElement( layout, props, React.createElement(component, props))
  }/>
)


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <RouteWithLayout layout={Layout} exact path="/developer" component={Developer} />
        <RouteWithLayout layout={Layout} exact path="/teacher" component={Teacher} />
        <RouteWithLayout layout={Layout} exact path="/musician" component={Musician} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
