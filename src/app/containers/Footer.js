import React from 'react';
import Figure from '../components/Figure';
import Logo from '../../static/images/svg/TM_Logo_2SVG.svg';

const Footer = () => {
  return ( 
    <React.Fragment>
      <footer className="footer has-background-grey">
        <div className="content has-text-centered">
          <Figure
            Path={Logo}
            Alt="Travel-To-Mexico-logo"
          >          
          </Figure>
          <nav className="level">
            <div className="level-item has-text-centered">
              <h6>
                3333-3333
              </h6>
            </div>
            <div className="level-item has-text-centered">
              <h6>
                sales@traveltomexico.com
              </h6>
            </div>
            <div className="level-item has-text-centered">
              <h6>
                www.traveltomexico.com 
              </h6>
            </div>
            <div className="level-item has-text-centered">
              <h6>
                By Tafer & Garza Blanca
              </h6>
            </div>
          </nav>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;