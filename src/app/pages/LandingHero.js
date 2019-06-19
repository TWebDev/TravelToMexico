import React from 'react';
import Figure from '../components/Figure';
import Logo from '../../static/images/svg/TM_Logo_1SVG.svg'
import Button from '../components/Button';

const LandingHero = (props) => {
  let
  {
    clickHandler,
    Validate
  } = props;
  return ( 
    <React.Fragment>
      <section className="hero is-fullheight is-relative" id="background-chichen">
        <div className="hero-body">
          <div className={Validate ? ("is-hidden") : ("container")}>
            <Figure
              Path={Logo}
              Alt="Travel-To-Mexico-logo"
            ></Figure>
            <section className="section has-text-centered">
              <Button Mods='is-primary is-large z-depth-5' clickHandler={clickHandler}>
                <strong className="has-text-grey">WELCOME</strong>
              </Button>                
            </section>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default LandingHero;