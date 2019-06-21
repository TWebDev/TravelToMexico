import React from 'react';
import Figure from '../components/Figure';
import Logo from '../../static/images/svg/TM_Logo_1SVG.svg';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Footer from '../containers/Footer';

const Vallarta = () => {
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
          <section className="hero" id="vallarta">
            <div className="container">
              <section className='is-pulled-right'>
                <p className='has-text-black is-size-5'>Puerto Vallarta is a city surrounded by mountains and tropical beaches. It is recognized for being a place filled with Huichol art and traditions, a place for great relaxation, and a very active nightlife.
If you are looking to have a great time, see beautiful places, and learning about an amazing culture, this is the right place.</p>
                <p className='has-text-black is-size-3'><strong className='has-text-black'>$699</strong> 5 days / 4 nights</p>
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

export default Vallarta;