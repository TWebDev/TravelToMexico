import React from 'react';
import Figure from '../components/Figure';
import Logo from '../../static/images/svg/TM_Logo_1SVG.svg';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Footer from '../containers/Footer';

const Cancun = () => {
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
          <section className="hero" id="cancun">
            <div className="container">
              <section>
                <p className='has-text-black is-size-5'>Located in southern Mexico, Cancun is one mesmerizing blend between jungle, beach, and prehispanic cultures. Everywhere you go Mayan art and traditions blend with the gorgeous jungle views.
                  This is the perfect place to experience a tropical world full of fantasy.</p>
                <p className='has-text-black is-size-3'><strong className='has-text-black'>$799</strong> 5 days / 4 nights</p>
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

export default Cancun;