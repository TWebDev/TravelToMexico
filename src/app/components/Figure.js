import React from 'react';

const Figure = (props) => {
  let 
  {
    Ratio,
    Path,
    Alt
  } = props;
  return ( 
    <React.Fragment>
      <figure className={`image ${Ratio}`}>
        <img src={Path} alt={Alt}/>
      </figure>
    </React.Fragment>
  );
}

export default Figure;