import React from 'react';
import { Link } from "react-router-dom";

const DestNav = () => {
  return ( 
    <React.Fragment>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-start">
          <span className="navbar-item">
              <h1 className="title has-text-light has-text-centered is-size-5">
                CHOOSE YOUR DESTINATION
              </h1>
          </span>
          <span className="navbar-item">
            <Link to="/cabo">
              <h1 className="title has-text-primary has-text-centered is-size-5 is-size-6-mobile">
                Los Cabos
              </h1>
            </Link>
          </span>
          <span className="navbar-item">
            <Link to="/vallarta">
              <h1 className="title has-text-primary has-text-centered is-size-5 is-size-6-mobile">
                Pto. Vallarta
              </h1>
            </Link>
          </span>
          <span className="navbar-item">
            <Link to="/cancun">
              <h1 className="title has-text-primary has-text-centered is-size-5 is-size-6-mobile">
                Cancun
              </h1>
            </Link>
          </span>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default DestNav;