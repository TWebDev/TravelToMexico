import React from 'react';

const Button = (props) => {
  let
  {
    Mods,
    children,
    clickHandler,
    disabled
  } = props;
  return ( 
    <React.Fragment>
      <button className={`button ${Mods}`} onClick={clickHandler} disabled={disabled}>
        {children}
      </button>
    </React.Fragment>
  );
}

export default Button;