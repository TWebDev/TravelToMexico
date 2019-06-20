import React from 'react';
import Figure from '../components/Figure';
import Footer from './Footer';

const Navbar = () => {

  let destinationList = [
    {
      Path: 'https://i.imgur.com/Yuscuya.png',
      Alt:'los-cabos',
      Text: 'Los Cabos'
    },
    {
      Path: 'https://i.imgur.com/36GoDJd.png',
      Alt:'puerto-vallarta',
      Text: 'Pto. Vallarta'
    },
    {
      Path: 'https://i.imgur.com/rQD559f.png',
      Alt:'cancun',
      Text: 'Cancun'
    },
    {
      Path: 'https://i.imgur.com/7Jehgwn.png',
      Alt:'loreto',
      Text: 'Loreto'
    }
  ]

  return ( 
    <React.Fragment>
      <section className="hero">
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
                      <h1 className='title has-text-primary is-size-4'>{item.Text}</h1>
                    </a>
                  </div>
                )}
              </nav>
            </div>
          </div>
        </section>
        <Footer>          
        </Footer>
    </React.Fragment>
  );
}

export default Navbar;