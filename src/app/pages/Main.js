import React from 'react';
import Figure from '../components/Figure';
import Logo from '../../static/images/svg/TM_Logo_1SVG.svg'
import Navbar from '../containers/Navbar';
import Form from '../containers/Form';

const Main = (props) => {
  let
  {
    Validate
  } = props;

  return ( 
    <React.Fragment>
      <div className={Validate ? ("grid is-absolute") : ("is-hidden")}>
        <div className="main-section is-relative z-depth-5">
          <nav className="level">
            <div className="level-left">
              <div className="level-item">
                <Figure
                  Path={Logo}
                  Alt='Travel-To-Mexico-logo'
                >                  
                </Figure>
              </div>
            </div>
          </nav>
          <Navbar>            
          </Navbar>
        </div>
        <div className="form">
          <section className="hero">
            <div className="hero-body">
              <div className="container">
                <h1 className="title is-size-1 has-text-primary">Or start booking</h1>
                <Form></Form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Main;