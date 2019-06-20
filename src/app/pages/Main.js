import React from 'react';
import Figure from '../components/Figure';
import Logo from '../../static/images/svg/TM_Logo_1SVG.svg'
import Navbar from '../containers/Navbar';

const Main = (props) => {
  let
  {
    Validate
  } = props;

  return ( 
    <React.Fragment>
      <div className={Validate ? ("grid is-absolute") : ("is-hidden")}>
        <div className="main-section is-relative z-depth-4">
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
          <div className="container">
            <section className="hero">
              <div className="hero-body">
                h
              </div>
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Main;