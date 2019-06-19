import React from 'react';

const Button = (props) => {
  let
  {
    Mods,
    children,
    clickHandler
  } = props;
  return ( 
    <React.Fragment>
      <button className={`button ${Mods}`} onClick={clickHandler}>
        {children}
      </button>
    </React.Fragment>
  );
}

export default Button;