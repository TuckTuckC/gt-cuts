import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import './GetStarted.css';

function GetStarted({opened, setOpened}) {

  function formatPhoneNumber(value) {
    // if input value is falsy eg if the user deletes the input, then just return
    if (!value) return value;
  
    // clean the input for any non-digit values.
    const phoneNumber = value.replace(/[^\d]/g, '');
  
    // phoneNumberLength is used to know when to apply our formatting for the phone number
    const phoneNumberLength = phoneNumber.length;
  
    // we need to return the value with no formatting if its less than four digits
    // this is to avoid weird behavior that occurs if you  format the area code too early
    if (phoneNumberLength < 3) return phoneNumber;
  
    // if phoneNumberLength is greater than 4 and less the 7 we start to return
    // the formatted number
    if (phoneNumberLength < 6) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
  
    // finally, if the phoneNumberLength is greater then seven, we add the last
    // bit of formatting and return it.
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  }

  function phoneNumberFormatter() {
    // grab the value of what the user is typing into the input
    const inputField = document.getElementById('number');
  
    // next, we're going to format this input with the `formatPhoneNumber` function, which we'll write next.
    const formattedInputValue = formatPhoneNumber(inputField.value);
  
    // Then we'll set the value of the inputField to the formattedValue we generated with the formatPhoneNumber
    inputField.value = formattedInputValue;
  }

  function send() {
    let body = `A user has just submitted the GT Streamlined contact form!
    Name: ${document.getElementById('contactName').value}
    Number: ${document.getElementById('number').value}
    Email: ${document.getElementById('email').value}
    Body: ${document.getElementById('body').value}`;
    let link = `mailto:gt.streamlined1@gmail.com?subject=${document.getElementById('subject').value}&body=${body}`
  }

  return (
    <div className={opened ? 'GetStarted opened' : 'GetStarted'}>
        <button className="close closeBtn" onClick={() => setOpened(false)}>
          <FontAwesomeIcon className='nav-icon closeIcon' icon={faXmark} />
        </button>
        <div className="user">
          <input type="text"  autocomplete="off" id='contactName' placeholder='Your Name' />
        </div>
        <div className="user">
          <input type="text"  autocomplete="off" id="number" onChange={() => phoneNumberFormatter()} placeholder='Your Phone Number' />
        </div>
        <div className="user">
          <input type="text"  autocomplete="off" id='email' placeholder='Your Email' />
        </div>
        <div className="user">
          <input type="text"  autocomplete="off" id='subject' placeholder='Subject' />
        </div>
        <div className="user">
          <input type="text"  autocomplete="off" id='body' placeholder='Body' />
        </div>
          <button className="submit" onClick={() => send()}>Send</button>
    </div>
  );
};

export default GetStarted;