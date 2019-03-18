import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class TopBar extends Component {

  render() {

    return (
      <div className="row">
        <div className="col-12 col-sm-4">
          <h1>Newsxyz</h1>
        </div>
        <div className="col-12 col-sm-8 d-flex justify-content-end align-items-center">
          <NavLink exact to="/" className="mx-3" activeClassName="active">Search</NavLink> |
          <NavLink exact to="/headlines" className="mx-3" activeClassName="active">Headlines</NavLink> |
          <NavLink exact to="/newest" className="mx-3" activeClassName="active">Newest 20</NavLink>
        </div>
        <hr className="w-100 mb-5" />
      </div>
    );
    
  }

}

export default TopBar;
