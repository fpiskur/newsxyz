import React, { Component } from 'react';
import TopBar from '../components/TopBar.js';
import ArticlesList from '../components/ArticlesList.js';

class HeadlinesPage extends Component {

  state = {
    articles: [],
    isLoaded: false
  }

  componentDidMount() {
    let req = new Request('https://newsapi.org/v2/top-headlines?country=Us&apiKey=bb3b79a4aa214ba886c69a12236f9178');
    fetch(req)
      .then(response => {
        if(response.ok) {
          return response.json();
        } else {
          throw new Error("Error: Server communication failed. Response status not 'OK'.");
        }
      })
      .then(json => {
        this.setState({ articles: json.articles, isLoaded: true });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {

    let {articles, isLoaded} = this.state;

    return !isLoaded
    ? <div className="text-center" style={{ marginTop: 'calc(100vh / 2 - 3em)' }}>Loading...</div>
    : (
      <div className="container">

        <TopBar />
        <h2 className="text-center mb-3">Headlines</h2>
        <ArticlesList articles={articles} />

      </div>
    );
  }

}

export default HeadlinesPage;
