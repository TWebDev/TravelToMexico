import React from 'react';
import Fieldinput from '../components/Form/formComponents/Fieldinput';
import Select from '../components/Form/formPseudoElems/Select';
import Button from '../components/ButtonForm';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/index';

const HeroForm = (props) => {

  let
  {
    formFieldSet,
    nameVal,
    lastVal,
    phoneVal,
    mailVal,

    updateFormName,
    updateFormLast,
    updateFormPhone,
    updateFormEmail
  } = props;

  const validateForm = () => {

    if (nameVal && lastVal && phoneVal && mailVal) {

      return ('is-outlined is-info is-radiusless is-large is-fullwidth has-text-white');

    } else {

      return ('is-static is-outlined is-dark is-radiusless is-large is-fullwidth has-text-dark');

    }
  }

  let optionsCall = [
    "",
    "9:00 am - 12:00 pm",
    "12:00 pm - 3:00 pm",
    "3:00 pm - 6:00 pm"
  ]
  let optionsDates = [
    "",
    "January - April",
    "May - August",
    "September - December"
  ]
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
              noValidate
            >
              <div className="is-flex" id="flexed-inputs">
                <div className="mc-field-group">
                  <Fieldinput
                    Type='text'
                    Name='NAME'
                    _Id='mce-NAME'
                    Placeholder='Please enter your first name'
                    inputIcon={nameVal ? ('fas fa-user-check') : ('far fa-user')}
                    Value={formFieldSet.nameValue || ''}
                    formHandler={e => updateFormName(e)}
                  >
                    First Name
                  </Fieldinput>
                </div>
                <div className="mc-field-group">
                  <Fieldinput
                    Type='text'
                    Name='LAST'
                    _Id='mce-LAST'
                    Placeholder='Please enter your last name'
                    inputIcon={lastVal ? ('fas fa-user-check') : ('far fa-user')}
                    Value={formFieldSet.lastValue || ''}
                    formHandler={e => updateFormLast(e)}
                  >
                    Last Name
                  </Fieldinput>
                </div>
              </div>
              <div className="mc-field-group">
                <Fieldinput
                  Type='tel'
                  Name='PHONE'
                  _Id='mce-PHONE'
                  Placeholder='123 456 7890'
                  inputIcon={phoneVal ? ('fas fa-mobile-alt') : ('fas fa-mobile')}
                  Value={formFieldSet.phoneValue || ''}
                  formHandler={e => updateFormPhone(e)}
                >
                  Phone number
                </Fieldinput>
              </div>
              <div className="mc-field-group">
                <Fieldinput
                  Type='email'
                  Name='EMAIL'
                  _Id='mce-EMAIL'
                  Placeholder='mail@mailme.com'
                  inputIcon={mailVal ? ('far fa-envelope') : ('far fa-envelope-open')}
                  Value={formFieldSet.emailValue || ''}
                  formHandler={e => updateFormEmail(e)}
                >
                  e-mail
                </Fieldinput>
              </div>
              <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response"></div>
                <div className="response" id="mce-success-response"></div>
              </div>
              <div className="mc-field-group" id='selects'>                
                <label htmlFor="mce-CALL_AT" class="label">What's the best time to call you? </label>
                <Select
                  Options={optionsCall}
                  Name='CALL_AT'
                  _Id='mce-CALL_AT'
                >
                </Select>
                <label htmlFor="mce-PREF_DATES" class="label">When are you coming to Mexico? </label>
                <Select
                  Options={optionsDates}
                  Name='PREF_DATES'
                  _Id='mce-PREF_DATES'
                >
                </Select>
              </div>
              <Button
                addClass={validateForm()}
                Type='submit'
                Value='Subscribe'
                _Id='mc-embedded-subscribe'
              >
                <p className='has-text-shadow'>Begin your booking</p>
              </Button>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

const mapStateToProps = ({ actions }) => {
  const {
    nameVal,
    lastVal,
    phoneVal,
    mailVal,
    formFieldSet }
    = actions
  return {
    nameVal,
    lastVal,
    phoneVal,
    mailVal,
    formFieldSet
  }
}

export default connect(mapStateToProps, actions)(HeroForm)