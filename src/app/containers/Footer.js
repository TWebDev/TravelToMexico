import React from 'react';
import Figure from '../components/Figure';
import Logo from '../../static/images/svg/TM_Logo_2SVG.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return ( 
    <React.Fragment>
      <footer className="footer is-paddingless has-background-grey">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <Figure
              Path={Logo}
              Alt="Travel_To_Mexico-logo"
            >              
            </Figure>
            <div className="columns">
              <div className="column">
                <a href="tel:9841305531"><p>(123)-456-7890</p></a>
              </div>
              <div className="column">
                <a href="mailto:sales@traveltomexico.com" target="_blank"><p>sales@traveltomexico.com</p></a>
              </div>
              <div className="column">
                <Link to="/"><p>www.traveltomexico.com</p></Link>
              </div>
              <div className="column">
                <p>&copy; Tafer & Garza Blanca</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;