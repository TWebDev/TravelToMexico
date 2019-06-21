import React from 'react';
import Figure from '../components/Figure';
import Logo from '../../static/images/svg/TM_Logo_1SVG.svg';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Footer from '../containers/Footer';

const Cabo = () => {
  return ( 
    <React.Fragment>
      <div className="destination">
          <nav className="level">
            <div className="level-left">
              <div className="level-item">
                <Link to="/">
                  <Figure
                    Path={Logo}
                    Alt='Travel-To-Mexico-logo'
                  >                  
                  </Figure>
                </Link>
              </div>
            </div>
          </nav>
          <nav className="level">
            <div className="level-item has-text-centered">
              <h1 className="title is-size-4">Choose your destination</h1>
            </div>            
            <div className="level-item has-text-centered">
              <Link to="/cancun">
                <span className='has-text-primary has-text-weight-bold'>Cancun</span>
              </Link>
            </div>                      
            <div className="level-item has-text-centered">
              <Link to="/cabo">
                <span className='has-text-primary has-text-weight-bold'>Cabo</span>
              </Link>
            </div>            
            <div className="level-item has-text-centered">
              <Link to="/vallarta">
                <span className='has-text-primary has-text-weight-bold'>Vallarta</span>
              </Link>
            </div>
          </nav>
          <section className="hero" id="cabo">
            <div className="container">
              <section>
                <p className='has-text-white is-size-5'>If you like beaches and desert Los Cabos is the ideal place for you.
                  Located between two seas, Los Cabos is a place where a luxurious relaxing vacation, a crazy adventure or a culturally rich trip meets perfectly, making this destination a true paradise. </p>
                <p className='has-text-primary is-size-3'><strong className='has-text-primary'>$799</strong> 5 days / 4 nights</p>
                <Button
                  Mods='is-primary is-medium has-text-black'
                >
                  Book now
                </Button>
              </section>
            </div>
          </section>
          <Footer></Footer>        
      </div>
    </React.Fragment>
  );
}

export default Cabo;