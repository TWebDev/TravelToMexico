import React from 'react';
import { Link } from 'react-router-dom';
import Figure from '../components/Figure';
import Footer from './Footer';

const Navbar = (clickHandler) => {

  let destinationList = [
    {
      Path:'https://i.imgur.com/Yuscuya.png',
      Alt: 'los-cabos',
      Text:'Los Cabos',
      Link:'/cabo'
    },
    {
      Path:'https://i.imgur.com/36GoDJd.png',
      Alt: 'puerto-vallarta',
      Text:'Pto. Vallarta',
      Link:'/vallarta'
    },
    {
      Path:'https://i.imgur.com/rQD559f.png',
      Alt: 'cancun',
      Text:'Cancun',
      Link:'/cancun',    
    },
  ]

  return ( 
    <React.Fragment>
      <section className="hero is-medium">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-size-2">Choose your destination</h1>
              <nav className="level">
                {destinationList.map((item, i) => 
                  <div className="level-item has-text-centered" key={i}>
                    <Link to={item.Link}>
                      <Figure
                        Path={item.Path}
                        Alt={item.Alt}
                      >                        
                      </Figure>
                      <h1 className='title has-text-primary is-size-4'>{item.Text}</h1>
                    </Link>
                  </div>
                )}
              </nav>
            </div>
          </div>
        </section>
        <Footer></Footer>        
    </React.Fragment>
  );
}

export default Navbar;