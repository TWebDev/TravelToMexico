import React from 'react';
import Input from '../components/Form/Input';
import Select from '../components/Form/Select';
import Button from '../components/Button';

const Form = (props) => {
  let
  {
    nameHandler,
    lastHandler,
    phoneHandler,
    emailHandler,

    nameValue,
    lastvalue,
    phoneValue,
    emailValue
  } = props;
  return ( 
    <React.Fragment>
      <section className="hero is-fullheight is-form">
        <div className="hero-body form-body">        
          <h1 className="title is-size-2 has-text-primary has-text-shadow">
            Book Now!
          </h1>          
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
                  Name="name"
                  _Id=""
                  Placeholder="First Name"
                  formHandler={nameHandler}
                  Value={nameValue}          
                  ></Input>
                </div>
                <div className="mc-field-group">
                  <Input        
                  Type="text"
                  Name="last"
                  _Id=""
                  Placeholder="Last Name"
                  formHandler={lastHandler}
                  Value={lastvalue}            
                  ></Input>
                </div>
              </div>
              <div className="mc-field-group">
                <Input        
                Type="tel"
                Name="phone"
                _Id=""
                Placeholder="123-456-7890"
                formHandler={phoneHandler}  
                Value={phoneValue}          
                ></Input>
              </div>
              <div className="mc-field-group">
                <Input        
                Type="email"
                Name="email"
                _Id=""
                Placeholder="me@mailme.com"
                formHandler={emailHandler}
                Value={emailValue}           
              ></Input>
              </div>    
              <div className="mc-field-group" id="selects">
                <Select
                Options={["What's the best time to call you?","9:00 am - 12:00 pm","12:00 pm - 3:00 pm","3:00 pm - 6:00 pm"]}
                Name=""
                _Id=""
                ></Select>
                <Select
                Options={["When are coming to Mexico?","January - April","May - August","September - December"]}
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
        </div>
      </section>
      
    </React.Fragment>
  );
}

export default Form;