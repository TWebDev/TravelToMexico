import React from 'react';

const Input = (props) => {
  let 
  {
    Type,
    Name,
    _Id,
    Placeholder,
    inputHandler,
    Value
  } = props;

  return (
    <React.Fragment>
      <input 
        className="input" 
        type={Type}
        name={Name}
        value={Value}
        id={_Id} 
        placeholder={Placeholder}
        onChange={inputHandler}
      >
      </input>
    </React.Fragment>
  )
}

export default Input;