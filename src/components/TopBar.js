import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class TopBar extends Component {

  state = {
    
  }

  render() {

    return (
      <div className="row">
        <div className="col-6">
          <h1>{this.props.heading}</h1>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <NavLink exact to="/" className="mr-3" activeClassName="active">Search</NavLink>
          <NavLink exact to="/headlines" className="mr-3" activeClassName="active">Headlines</NavLink>
          <NavLink exact to="/newest" activeClassName="active">Newest 20</NavLink>
        </div>
        <hr className="w-100" />
      </div>
    );
    
  }

}

export default TopBar;
