import React from 'react';
import Figure from '../components/Figure';
import Logo from '../../static/images/svg/TM_Logo_1SVG.svg'

const Main = (props) => {
  let
  {
    Validate
  } = props;
  let destinationList = [
    {
      Path: 'https://i.imgur.com/Yuscuya.png',
      Alt:'los-cabos'
    },
    {
      Path: 'https://i.imgur.com/36GoDJd.png',
      Alt:'puerto-vallarta'
    },
    {
      Path: 'https://i.imgur.com/rQD559f.png',
      Alt:'cancun'
    },
    {
      Path: 'https://i.imgur.com/7Jehgwn.png',
      Alt:'loreto'
    }
  ]

  return ( 
    <React.Fragment>
      <div className={Validate ? ("grid is-absolute") : ("is-hidden")}>
        <div className="main-section">
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
          <section className="hero is-medium">
            <div className="hero-body">
              <div className="container">
                <h1 className="title is-size-2">Choose your destination</h1>
                <nav className="level">
                  {destinationList.map((item) => 
                    <div className="level-item has-text-centered">
                      <a href="/">
                        <Figure
                          Path={item.Path}
                          Alt={item.Alt}
                        >                        
                        </Figure>
                        <h1 className='title has-text-primary is-size-4'>Los Cabos</h1>
                      </a>
                    </div>
                  )}
                </nav>
              </div>
            </div>
          </section>
        </div>
        <div className="form">
          Form
        </div>
      </div>
    </React.Fragment>
  );
}

export default Main;