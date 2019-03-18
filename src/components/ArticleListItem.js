import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ArticleListItem extends Component {

  // Stolen from https://gist.github.com/hagemann/382adfc57adbd5af078dc93feef01fe1
  slugify(string) {
    const a = 'àáäâãåăæçèéëêǵḧìíïîḿńǹñòóöôœṕŕßśșțùúüûǘẃẍÿź·/_,:;'
    const b = 'aaaaaaaaceeeeghiiiimnnnoooooprssstuuuuuwxyz------'
    const p = new RegExp(a.split('').join('|'), 'g')

    return string.toString().toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
        .replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/[^\w-]+/g, '') // Remove all non-word characters
        .replace(/--+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, '') // Trim - from end of text
  }

  setLocalStorage(article) {
    localStorage.setItem(0, JSON.stringify(article));
  }

  render() {

    let {article} = this.props;
    let articleDate = new Date(article.publishedAt);

    return (
      <div key={article.title} className="row py-3 border-bottom">
        <div className="col-5 d-flex">
          <Link
            to={`/headlines/${this.slugify(article.title)}`}
            target="_blank"
            onClick={() => this.setLocalStorage(article)}>
            <img src={article.urlToImage} className="w-100" alt={article.title} />
          </Link>
        </div>
        <div className="col-7">
          <div className="row text-muted mb-2">
            <div className="col-6"><small>SOURCE:</small>
            &nbsp;{article.source.name}</div>
            <div className="col-6 d-flex justify-content-end align-items-baseline">{articleDate.toLocaleDateString('hr-HR')}</div>
          </div>
          <h2 className="h5">
            <Link
              to={`/headlines/${this.slugify(article.title)}`}
              target="_blank"
              onClick={() => this.setLocalStorage(article)}>
              {article.title}
            </Link>
          </h2>
          <p>{article.description}</p>
          <div className="row mb-3">
            <div className="col-12 d-flex justify-content-end">{article.author
              ? 'by ' + article.author
              : 'No author specified'}
            </div>
          </div>
        </div>
      </div>
    );
    
  }

}

export default ArticleListItem;
