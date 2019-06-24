import React from 'react';
import Figure from '../components/Figure';
import Logo from '../../static/images/svg/TM_Logo_1SVG.svg'
import Navbar from '../containers/Navbar';
import Form from '../containers/Form';
import { Route, Link } from 'react-router-dom';
import Cabo from '../pages/Cabo';
import Cancun from '../pages/Cancun';
import Vallarta from '../pages/Vallarta';
import Footer from '../containers/Footer';

const Main = (props) => {
  let
  {
    Validate,
    clickHandler
  } = props;

  return ( 
    <React.Fragment>
      <div className={Validate ? ("hero is-absolute") : ("is-hidden")}>
        <div className="columns is-desktop is-marginless">
          <div className="column is-paddingless is-two-thirds-widescreen is-full-desktop has-background-grey">
            <section className="hero is-fullheight">
              <nav className="level">
                <div className="level-left">
                  <div className="level-item">
                    <Link to="/">
                      <Figure
                        Path={Logo}
                        Alt="Travel_To_Mexico-logo"
                      >                    
                      </Figure>
                    </Link>
                  </div>
                </div>
              </nav>
                  <Route path="/" component={Navbar}/>
                  <Route path="/Cabo" component={Cabo}/>
                  <Route path="/Cancun" component={Cancun}/>
                  <Route path="/Vallarta" component={Vallarta}/>                               
                <Footer></Footer>            
            </section>
          </div>
          <div className="column is-paddingless is-hidden-touch is-hidden-desktop-only">
            <section className="hero is-fullheight">
              <div className="hero-body">
                <div className="container">
                  <h1 className="title is-size-2 has-text-primary">
                    Start Booking!
                  </h1>
                  <Form></Form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Main;