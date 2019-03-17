import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SearchPage from './pages/SearchPage.js';
import HeadlinesPage from './pages/HeadlinesPage.js';
import NewestPage from './pages/NewestPage.js';

class App extends Component {

  render() {

    return (
      <Router>
        <div className="py-4">

          <Route exact path="/" component={SearchPage} />
          <Route exact path="/headlines" component={HeadlinesPage} />
          
          <Route exact path="/newest" component={NewestPage} />

        </div>
      </Router>
    );
  }
}

export default App;
