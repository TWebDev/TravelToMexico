import React, { Component } from 'react';
import ReactGA from 'react-ga';
import LandingHero from './pages/LandingHero';
import Main from './pages/Main';

class App extends Component {
    state = { 
      formFields: {
        name:'',
        last:'',
        phone:'',
        email:''
      },
      openLanding: false
    }

  componentDidMount() {
    ReactGA.initialize('UA-142110236-2');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  openLandingPage () {
    var validator = this.state.openLanding;
    validator = !validator;
    this.setState({
      openLanding: validator
    })
  }

  updateName(e) {    
    let nameBool;
    let formFields = Object.assign({}, this.state.formFields);

      formFields.name = e.target.value;
      formFields.name = formFields.name.replace(/ /g,'');
      formFields.name.length ? nameBool= true : nameBool = false;

    this.setState({
      formFields, nameBool
    })
  }

  updateLast(e) {    
    let nameBool;
    let formFields = Object.assign({}, this.state.formFields);

      formFields.last = e.target.value;
      formFields.last = formFields.last.replace(/ /g,'');
      formFields.last.length ? nameBool= true : nameBool = false;

    this.setState({
      formFields, nameBool
    })
  }

  updatePhone(e) {
    let phoneBool;
    let formFields = Object.assign({}, this.state.formFields);
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
        str = str.substring(0,8)
        str = str + lastFour
    } else {
        phoneBool = false;
    }
    formFields.phone = str;

    this.setState({
      formFields, phoneBool
    })
  }

  updateEmail(e) {
    let emailBool;
    let formFields = Object.assign({}, this.state.formFields);    

      formFields.email = e.target.value;
      formFields.email = formFields.email.replace(/ /g,'');
      formFields.email.length ? emailBool= true : emailBool = false;
    var mailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      mailRegex.test(formFields.email) ? emailBool = true : emailBool = false;
    
    this.setState({
      formFields, emailBool
    })
  }

  render() { 
    return ( 
      <React.Fragment>
        <LandingHero 
          clickHandler={e => this.openLandingPage(e)}
          Validate={this.state.openLanding}>
        </LandingHero>
        <Main 
          Validate={this.state.openLanding}
          nameHandler={e => this.updateName(e)}
          lastHandler={e => this.updateLast(e)}
          phoneHandler={e => this.updatePhone(e)}
          emailHandler={e => this.updateEmail(e)}

          nameValue={this.state.formFields.name}
          lastvalue={this.state.formFields.last}        
          phoneValue={this.state.formFields.phone !== undefined ? this.state.formFields.phone : null}
          emailValue={this.state.formFields.email}
        ></Main>
      </React.Fragment>
    );
  }
}

export default App;