import React, { Component } from 'react';
import TopBar from '../components/TopBar.js';

class SearchPage extends Component {

  state = {
    articles: []
  }

  render() {

    return (
      <div className="container">

        <TopBar />
        <h2 className="text-center mb-3">Search articles</h2>

      </div>
    );
  }

}

export default SearchPage;
