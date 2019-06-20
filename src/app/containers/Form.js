import React from 'react';
import Input from '../components/Form/Input';
import Select from '../components/Form/Select';
import Button from '../components/Button';

const Form = () => {
  return ( 
    <React.Fragment>
      <div id="mc_embed_signup">
        <form 
          action=""  
          method="post"
          id=""
          name=""
          className="validate"
          target="_blank"
          noValidate>
          <div className="is-flex" id="flexed-inputs">
            <div className="mc-field-group">
              <Input        
              Type="text"
              Name="first-name"
              _Id=""
              Placeholder="First Name"
              formHandler=""            
              ></Input>
            </div>
            <div className="mc-field-group">
              <Input        
              Type="text"
              Name="last-name"
              _Id=""
              Placeholder="Last Name"
              formHandler=""            
              ></Input>
            </div>
          </div>
          <div className="mc-field-group">
            <Input        
            Type="tel"
            Name="phone"
            _Id=""
            Placeholder="123-456-7890"
            formHandler=""            
            ></Input>
          </div>
          <div className="mc-field-group">
            <Input        
            Type="email"
            Name="email"
            _Id=""
            Placeholder="me@mailme.com"
            formHandler=""            
          ></Input>
          </div>    
          <div className="mc-field-group" id="selects">
            <Select
            Options={["What's the best time to call you?","9:00 am - 12:00 pm","12:00 pm - 3:00 pm","3:00 pm - 6:00 pm"]}
            Name=""
            _Id=""
            ></Select>
            <Select
            Options={["When are coming to Mexico?","","",""]}
            Name=""
            _Id=""
            ></Select>
          </div>                                    
          <Button
            Mods="is-primary has-text-dark is-large"
            Type="submit"
            Value="Subscribe"
            _Id="mc-embedded-subscribe"
          >
            Begin your experience
          </Button>          
        </form>
      </div>
    </React.Fragment>
  );
}

export default Form;