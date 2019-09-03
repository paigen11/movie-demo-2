import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import TmdbIcon from '../../assets/tmdbIcon.png';
import './Header.scss';

const Header = () => {
  const [expandedLinks, setExpandedLinks] = useState(false);

  const toggleLinks = () => () => {
    setExpandedLinks(!expandedLinks)
  }

  return (
      <nav className="navbar-wrapper content">
        <ul className="navbar-links">
          <div>
            <li className="navbar-link" onClick={() => setExpandedLinks(false)}>
            <NavLink to="/" >
              <img src={TmdbIcon} alt="logo" />
            </NavLink>
            </li>
            <li className="navbar-link bars" onClick={toggleLinks()}>
              <i className="fa fa-bars" aria-hidden="true" />
            </li>
          </div>
          <div className={expandedLinks ? '' : 'hidden'}>
            <li className="navbar-link" onClick={() => setExpandedLinks(false)}>
              <NavLink to="/nowplaying">Now Playing</NavLink>
            </li>
            <li className="navbar-link" onClick={() => setExpandedLinks(false)}>
              <NavLink to="/upcoming">Coming Soon</NavLink>
            </li>
            <li className="navbar-link" onClick={() => setExpandedLinks(false)}>
              <NavLink to="/search">Movie Search</NavLink>
            </li>
            <li className="navbar-link" onClick={() => setExpandedLinks(false)}>
              <NavLink to="/genres">Genres</NavLink>
            </li>
          </div>
        </ul>
      </nav>
  );
}

export default Header;
