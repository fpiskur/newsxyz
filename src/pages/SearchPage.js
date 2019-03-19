import React, { Component } from 'react';
import TopBar from '../components/TopBar.js';
import ArticlesList from '../components/ArticlesList.js';

class SearchPage extends Component {

  state = {
    articles: [],
    searchTerm: '',
    notFound: false
  }

  // Update state.searchTerm on input
  handleSearchChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  }

  searchFor = (e) => {
    e.preventDefault();
    let {searchTerm} = this.state;
    if(searchTerm) {
      let req = new Request(`https://newsapi.org/v2/everything?q=${searchTerm}&language=en&apiKey=bb3b79a4aa214ba886c69a12236f9178`);
      fetch(req)
        .then(response => {
          if(response.ok) {
            return response.json();
          } else {
            throw new Error("Error: Server communication failed. Response status not 'OK'.");
          }
        })
        .then(json => {
          if(json.totalResults) {
            this.setState({ articles: json.articles, notFound: false });
          } else {
            this.setState({ articles: [], notFound: true })
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  }

  render() {

    let {articles, notFound, searchTerm} = this.state;

    return (
      <div className="container">

        <TopBar />
        <h2 className="text-center mb-3">Search articles</h2>

        <form className="mb-3 w-100 px-5 mx-auto" onSubmit={this.searchFor}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search by keyword..."
              aria-describedby="search-articles"
              value={searchTerm}
              onChange={this.handleSearchChange}
            />
            <div className="input-group-append">
              <button type="submit" className="input-group-text" id="search-articles">Search</button>
            </div>
          </div>
        </form>

        <hr />

        { notFound
          ? <div className="row mb-3"><div className="col-12">No articles found.</div></div>
          : <ArticlesList articles={articles} />
        }

      </div>
    );
  }

}

export default SearchPage;
