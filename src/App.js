import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

import Developer from './pages/Developer'
import Musician from './pages/Musician';
import Teacher from './pages/Teacher';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Route exact path="/" component={Developer} />
        <Route exact path="/developer" component={Developer} />
        <Route exact path="/teacher" component={Teacher} />
        <Route exact path="/musician" component={Musician} />
      </BrowserRouter>
    </Layout>
  );
}

export default App;
