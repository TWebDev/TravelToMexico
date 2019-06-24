import React from 'react';

const Input = (props) => {
  let 
  {
    Type,
    Name,
    _Id,
    Placeholder,
    formHandler,
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
        onChange={formHandler}
      >
      </input>
    </React.Fragment>
  )
}

export default Input;