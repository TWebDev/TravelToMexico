import React from 'react';
import Figure from '../components/Figure';
import Logo from '../../static/images/svg/TM_Logo_1SVG.svg'
import Navbar from '../containers/Navbar';
import HeroForm from '../containers/HeroForm';
import { Route, Link } from 'react-router-dom';
import Cabo from '../pages/Cabo';
import Cancun from '../pages/Cancun';
import Vallarta from '../pages/Vallarta';
import Footer from '../containers/Footer';

const Main = (props) => {
  var
  {
    Validate,
    inputHandler,
    disabled,

    nameValue,
    lastvalue,
    phoneValue,
    emailValue
  } = props;

  return ( 
    <React.Fragment>
      <div className={Validate ? ("hero is-absolute") : ("is-hidden")}>
        <div className="columns is-desktop is-marginless">
          <div className="column is-paddingless is-two-thirds-widescreen is-full-desktop has-background-grey z-depth-5">
            <section className="hero is-fullheight">
              <nav className="level">
                <div className="level-left">
                  <div className="level-item">
                    <Link to="/welcome">
                      <Figure
                        Path={Logo}
                        Alt="Travel_To_Mexico-logo"
                      >                    
                      </Figure>
                    </Link>
                  </div>
                </div>
              </nav>
                  <Route path="/welcome" component={Navbar}/>
                  <Route path="/cabo" component={Cabo}/>
                  <Route path="/cancun" component={Cancun}/>
                  <Route path="/vallarta" component={Vallarta}/>   
                  <div className="is-hidden-desktop"><HeroForm></HeroForm></div>
                <Footer></Footer>            
            </section>
          </div>
          <div className="column is-paddingless is-hidden-touch is-hidden-desktop-only">
            <HeroForm></HeroForm>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Main;