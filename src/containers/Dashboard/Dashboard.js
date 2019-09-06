import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Dashboard.scss';

export class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard content" data-testid="main__dashboard">
        <div className="dashboard-card-wrapper">
          <NavLink to="/nowplaying">
            <i className="fa fa-ticket" aria-hidden="true" />
            <h1>Now Playing</h1>
          </NavLink>
        </div>
        <div className="dashboard-card-wrapper">
          <NavLink to="/upcoming">
            <i className="fa fa-video-camera" aria-hidden="true" />
            <h1>Upcoming Releases</h1>
          </NavLink>
        </div>
        <div className="dashboard-card-wrapper">
          <NavLink to="/genres">
            <i className="fa fa-film" aria-hidden="true" />
            <h1>Genres</h1>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Dashboard;
