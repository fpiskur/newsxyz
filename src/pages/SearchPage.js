import React, { Component } from 'react';
import TopBar from '../components/TopBar.js';

class SearchPage extends Component {

  state = {
    articles: []
  }

  componentDidMount() {
    
  }

  render() {

    return (
      <div className="container">

        <TopBar heading="Search articles" />

      </div>
    );
  }

}

export default SearchPage;
