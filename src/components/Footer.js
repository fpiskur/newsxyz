import React, { Component } from 'react';

class Footer extends Component {

  goToNewsApi() {
    window.location = 'https://newsapi.org';
  }

  render() {

    return (
      <div className="footer">
        <div className="container">
          <p className="m-0 py-2 text-center">Powered by&nbsp;
            <button
              type="button"
              className="btn btn-link p-0"
              onClick={this.goToNewsApi}>
              News API
            </button>
          </p>
        </div>
      </div>
    );
    
  }

}

export default Footer;
