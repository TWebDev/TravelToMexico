import React from 'react';
import Figure from '../components/Figure';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import DestNav from '../containers/DestNav';

const Cancun = () => {
  return ( 
    <React.Fragment>
      <DestNav></DestNav>      
      <section className="hero is-medium is-relative">
        <div className="columns" id="destination">
          <div className="column is-half">
            <div className="section">
              <h1 className="title has-text-shadow has-text-primary">Cancun</h1>
              <p>
                Located in southern Mexico, Cancun is one mesmerizing blend between jungle, beach, and prehispanic cultures. Everywhere you go Mayan art and traditions blend with the gorgeous jungle views.
                This is the perfect place to experience a tropical world full of fantasy.
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
          Path="https://i.imgur.com/4M6hnJD.png"
          Alt="Chichen-itza"
        >          
        </Figure>                   
      </section>      
    </React.Fragment>
  );
}

export default Cancun;