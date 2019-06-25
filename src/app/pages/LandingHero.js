import React from 'react';
import Figure from '../components/Figure';
import Logo from '../../static/images/svg/TM_Logo_1SVG.svg'
import Button from '../components/Button';
import { Link } from 'react-router-dom';
const LandingHero = (props) => {
  let
  {
    clickHandler,
    Validate
  } = props;
  return ( 
    <React.Fragment>
      <section className="hero is-fullheight is-relative" id="background-chichen">
        <div className={Validate ? ("is-hidden") : ("hero-body")}>
          <div className="container">
            <Figure
              Path={Logo}
              Alt="Travel-To-Mexico-logo"
            ></Figure>
            <section className="section has-text-centered">
              <Link to="/welcome">  
                <Button Mods='is-primary is-large z-depth-5' clickHandler={clickHandler}>
                  <strong className="has-text-grey">WELCOME</strong>
                </Button>   
              </Link>             
            </section>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default LandingHero;