import React, { Component } from 'react';
import TopBar from './TopBar.js';

class SingleArticle extends Component {

  getArticle() {
    return JSON.parse(localStorage.getItem(0));
  }

  goToExternalUrl(url) {
    // window.open(article.url, '_blank');
    window.location = url;
  }

  render() {

    if(!localStorage.length) {
      return <p>Something went wrong. Please close the tab and try again.</p>
    } else {
      let article = this.getArticle();
      let articleDate = new Date(article.publishedAt);
      localStorage.clear();

      return (
        <div className="container">
          <TopBar />
          <h2 className="text-center">{article.title}</h2>
          <div className="row mb-1">
            <div className="col-6">AUTHOR: {article.author}</div>
            <div className="col-6 d-flex justify-content-end">PUBLISHED: {articleDate.toLocaleDateString('hr-HR')}</div>
          </div>
          <img className="w-100 mb-3" src={article.urlToImage} alt={article.title} />
          <p className="text-center text-muted mb-5">SOURCE: {article.source.name}</p>
          <p>{article.content}</p>
          <p className="text-right">
            <button
              type="button"
              className="btn btn-link"
              onClick={() => this.goToExternalUrl(article.url)}>
              Go to original article
            </button>
          </p>
        </div>
      );
    }
    
  }

}

export default SingleArticle;
