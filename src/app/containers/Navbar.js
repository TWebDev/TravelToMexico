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
      <div className="columns">
        <div className="column is-full">
          <h1 className="title has-text-centered is-size-5-touch">
          CHOOSE YOUR DESTINATION
          </h1>
          <div className="columns">
            {destinationList.map((item, i) => 
            <div className="column">
              <Link to={item.Link}>
                <Figure
                  Path={item.Path}
                  Alt={item.Alt}
                >               
                </Figure>
                <h1 className="title has-text-primary has-text-centered is-size-5">
                  {item.Text}
                </h1>
              </Link>
            </div>
            )}
          </div>
        </div>
      </div>          
    </React.Fragment>
  );
}

export default Navbar;