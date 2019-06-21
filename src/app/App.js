import React, { Component } from 'react';
import ReactGA from 'react-ga';
import LandingHero from './pages/LandingHero';
import Main from './pages/Main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      openLanding: false
    }
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

  render() { 
    return ( 
      <React.Fragment>
        <LandingHero 
          clickHandler={e => this.openLandingPage(e)}
          Validate={this.state.openLanding}>
        </LandingHero>
        <Main 
          Validate={this.state.openLanding}
        ></Main>
      </React.Fragment>
    );
  }
}

export default App;