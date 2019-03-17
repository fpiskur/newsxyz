import React, { Component } from 'react';
import ArticleListItem from './ArticleListItem.js';

class ArticlesList extends Component {

  render() {

    let {articles} = this.props;

    return (
      articles.map(article => (
          <ArticleListItem key={article.title} article={article} />
      ))
    );
    
  }

}

export default ArticlesList;
