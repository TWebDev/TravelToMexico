import React from 'react';
import Figure from '../components/Figure';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import DestNav from '../containers/DestNav';

const Cabo = () => {
  return ( 
    <React.Fragment>
      <DestNav></DestNav>      
      <section className="hero is-medium is-relative">
        <div className="columns" id="destination">
          <div className="column is-half">
            <div className="section">
              <h1 className="title has-text-shadow has-text-primary">Los Cabos</h1>
              <p>
              If you like beaches and desert Los Cabos is the ideal place for you.
              Located between two seas, Los Cabos is a place where a luxurious relaxing vacation, a crazy adventure or a culturally rich trip meets perfectly, making this destination a true paradise. 
              </p>
              <p><strong className="has-text-black is-size-3 has-text-primary has-text-shadow">$799</strong>5 days / 4 nights </p>
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
          Path="https://i.imgur.com/Iu5b5ou.png"
          Alt="El-Arco"
        >          
        </Figure>                   
      </section> 
    </React.Fragment>
  );
}

export default Cabo;