import React, { Component } from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import SingleArticle from './components/SingleArticle.js';
import Footer from './components/Footer.js';

import SearchPage from './pages/SearchPage.js';
import HeadlinesPage from './pages/HeadlinesPage.js';
import NewestPage from './pages/NewestPage.js';

class App extends Component {

  render() {

    return (
      <div style={{ height: '100vh' }}>
        <Switch>
          <div className="py-4">

            <Route exact path="/" component={SearchPage} />
            <Route exact path="/headlines" component={HeadlinesPage} />
            <Route path={"/headlines/:article"} render={(props) => (
              <SingleArticle {...props} />
            )} />
            <Route exact path="/newest" component={NewestPage} />

          </div>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
