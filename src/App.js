import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

import Landing from './pages/Landing';
import Developer from './pages/Developer';
import Musician from './pages/Musician';
import Teacher from './pages/Teacher';
import Layout from './components/Layout';
import MusicLessons from './pages/music/Lessons';
import MusicArrangements from './pages/music/Arrangements';
import Error404 from './pages/Error404';

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
        <RouteWithLayout layout={Layout} exact path="/music/lessons" component={MusicLessons} />
        <RouteWithLayout layout={Layout} exact path="/music/arrangements" component={MusicArrangements} />
        <Route path="" component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
