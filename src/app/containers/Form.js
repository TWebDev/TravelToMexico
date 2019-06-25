import React from 'react';
import Input from '../components/Form/Input';
import Select from '../components/Form/Select';
import Button from '../components/Button';

const Form = (props) => {
  let
  {
    inputHandler,
    disabled,

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
              action="https://gmail.us20.list-manage.com/subscribe/post?u=408813f962bf5808a4d27eaea&amp;id=06d479010a"  
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
              noValidate>
              <div className="is-flex" id="flexed-inputs">
                <div className="mc-field-group">
                  <Input        
                  Type="text"
                  Name="NAME"
                  Placeholder="First Name"
                  inputHandler={inputHandler}
                  Value={nameValue}      
                  ></Input>
                </div>
                <div className="mc-field-group">
                  <Input        
                  Type="text"
                  Name="LAST"
                  Placeholder="Last Name"
                  inputHandler={inputHandler}
                  Value={lastvalue}            
                  ></Input>
                </div>
              </div>
              <div className="mc-field-group">
                <Input        
                Type="tel"
                Name="PHONE"
                Placeholder="123-456-7890"
                inputHandler={inputHandler}  
                Value={phoneValue}          
                ></Input>
              </div>
              <div className="mc-field-group">
                <Input        
                Type="email"
                Name="EMAIL"
                Placeholder="me@mailme.com"
                inputHandler={inputHandler}
                Value={emailValue}           
              ></Input>
              </div>    
              <div className="mc-field-group" id="selects">
                <Select
                Options={["What's the best time to call you?","9:00 am - 12:00 pm","12:00 pm - 3:00 pm","3:00 pm - 6:00 pm"]}
                Name="CALL_AT"
                ></Select>
                <Select
                Options={["When are you coming to Mexico?","January - April","May - August","September - December"]}
                Name="PREF_DATES"
                ></Select>
              </div>                                    
              <Button
                Mods="is-primary has-text-dark is-large"
                Type="submit"
                Value="Subscribe"
                _Id="mc-embedded-subscribe"
                disabled={disabled}
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