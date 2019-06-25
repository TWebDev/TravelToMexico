import React from 'react';
import Figure from '../components/Figure';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import DestNav from '../containers/DestNav';

const Vallarta = () => {
  return ( 
    <React.Fragment>
      <DestNav></DestNav>      
      <section className="hero is-medium is-relative">
        <div className="columns" id="destination">
          <div className="column is-half is-offset-6">
            <div className="section">
              <h1 className="title has-text-shadow has-text-primary">Puerto Vallarta</h1>
              <p>
              Puerto Vallarta is a city surrounded by mountains and tropical beaches. It is recognized for being a place filled with Huichol art and traditions, a place for great relaxation, and a very active nightlife.
If you are looking to have a great time, see beautiful places, and learning about an amazing culture, this is the right place.
              </p>
              <p><strong className="has-text-black is-size-3 has-text-primary has-text-shadow">$699</strong>5 days / 4 nights </p>
              <Link to="/book">  
                <Button
                  Mods="is-primary has-text-black is-hidden-widescreen"
                >
                  Book Now!
                </Button>
              </Link>
            </div>
          </div>
        </div>            
        <Figure
          Path="https://i.imgur.com/phTLSJc.png"
          Alt="Malecon-Vallarta"
        >          
        </Figure>                   
      </section> 
    </React.Fragment>
  );
}

export default Vallarta;