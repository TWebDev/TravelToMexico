import React, { Component } from 'react';
import ReactGA from 'react-ga';
import LandingHero from './pages/LandingHero';
import Main from './pages/Main';

class App extends Component {
    state = { 
      formFields: {
                    name: '',
                    last: '',
                    phone:'',
                    email:'',
                  },
      formFilled: {
                    nameBool:  false,
                    lastBool:  false,
                    phoneBool: false,
                    emailBool: false
                  },
      openLanding: false
    }

  componentDidMount() {
    ReactGA.initialize('UA-142110236-2');
    ReactGA.pageview(window.location.pathname + window.location.search); 
  }

  openLandingPage = () => {
    var validator = this.state.openLanding;
    validator = !validator;
    this.setState({
      openLanding: validator
    })
  }

  updateForm = e => {
    let formFields = Object.assign({}, this.state.formFields);    
    let formFilled = Object.assign({}, this.state.formFilled);   
    e.target.name = e.target.name.toLowerCase();

    switch (e.target.name) {
      case "name":          
          var nameBool;                
              formFields.name = e.target.value;
              formFields.name = formFields.name.replace(/ /g,'');
              formFields.name.length ? nameBool= true : nameBool = false;
              formFilled.nameBool = nameBool

          this.setState({
            formFields, formFilled
          })

          break;

      case "last":
          var lastBool;
              formFields.last = e.target.value;
              formFields.last = formFields.last.replace(/ /g,'');
              formFields.last.length ? lastBool= true : lastBool = false;
              formFilled.lastBool = lastBool

          this.setState({
            formFields, formFilled
          })
        break;

      case "phone":
          var phoneBool;
          var invalidChars = /\D+/gm;
              formFields.phone = e.target.value;
              formFields.phone = formFields.phone.replace(/ /g,'');
              formFields.phone.length ? phoneBool = true : phoneBool = false;    
          var str = formFields.phone;

          if (invalidChars.test(formFields.phone)) {
            str = str.replace(invalidChars, "");
            phoneBool = false;
          }        
          if (str.length >= 10) {
                str = str.substring(0 , 10);      
                str = str.replace(/(\S{3})/g,"$1-");
                str = str.replace(/-$/,"");
            var lastFour = str.substr(str.length - 5);
                lastFour = lastFour.replace("-","");
                str = str.substring(0,8);
                str = str + lastFour;
          } else {
              phoneBool = false;
          }
          formFields.phone = str;
          formFilled.phoneBool = phoneBool

        
          this.setState({
            formFields, formFilled
          })
        break;

      case "email":
          var emailBool;
          var mailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              formFields.email = e.target.value;
              formFields.email = formFields.email.replace(/ /g,"");  
              mailRegex.test(formFields.email) ? emailBool = true : emailBool = false;
              formFilled.emailBool = emailBool
              
          
          this.setState({
            formFields, formFilled
          })
        break;

      default:        
        break;
    }
  }

  render() { 
    if (this.state.formFilled.nameBool  &&
        this.state.formFilled.lastBool  &&
        this.state.formFilled.phoneBool &&
        this.state.formFilled.emailBool === true) {
      var disabled = false;
    } else {
          disabled = true
    }
    return ( 
      <React.Fragment>
        <LandingHero 
          clickHandler={e => this.openLandingPage(e)}
          Validate={this.state.openLanding}
        >
        </LandingHero>
        <Main 
          Validate={this.state.openLanding}
          inputHandler={e => this.updateForm(e)}
          disabled={disabled}

          nameValue={this.state.formFields.name}
          lastvalue={this.state.formFields.last}        
          phoneValue={this.state.formFields.phone !== undefined ? this.state.formFields.phone : null}
          emailValue={this.state.formFields.email}
        >          
        </Main>
      </React.Fragment>
    );
  }
}

export default App;