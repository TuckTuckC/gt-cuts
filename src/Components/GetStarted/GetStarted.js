import React from 'react';
import {useRef, useState} from 'react';

import emailjs from '@emailjs/browser';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import './GetStarted.css';

function GetStarted({opened, setOpened}) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(false);

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

  function phoneNumberFormatter(e) {
    // Pass value to formatPhoneNumber to have it formatted
    const formattedInputValue = formatPhoneNumber(e);
  
    // Set number to the newly formatted number
    setNumber(formattedInputValue);
  }

  // const submitHandler = async(e) => {
  //   e.preventDefault();
  //   if (!email || !subject || !message) {
  //     return;
  //   } else {
  //     setNewMessage(
        // `A user has just submitted the GT Streamlined contact form!
        // Name: ${name}
        // Number: ${document.getElementById('number').value}
        // Email: ${email}
        // Subject: ${subject}
        // Body: ${message}`
  //     )
  //   }

  //   try {
  //     setLoading(true);

  //     const {data} = await axios.post(`/`, {
  //       newMessage,
  //     })
  //     console.log(data.newMessage);
  //     setLoading(false)
  //   } catch (err) {
  //     setLoading(false)
  //     console.log(newMessage);
  //   }
  // }

  const form = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hqka8cg', 'template_4nujv4f', form.current, '-RU76Sk6CS2xlimLj')
    .then((result) => {
      console.log(result.text);
      setName('');
      setNumber('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, (error) => {
      console.log(error.text);
    });
  }

  return (
    <form ref={form} onSubmit={submitHandler} id='contactForm' className={opened ? 'GetStarted opened' : 'GetStarted'}>
        <button className="close closeBtn" onClick={() => setOpened(false)}>
          <FontAwesomeIcon className='nav-icon closeIcon' icon={faXmark} />
        </button>
        <div className="user">
          <input 
            type="text" 
            value={name} 
            name='user_name' 
            id='contactName' 
            placeholder='Your Contact Name' 
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="user">
          <input 
            type="text" 
            value={number} 
            name='user_number' 
            id="number" 
            placeholder='Your Phone Number' 
            onChange={(e) => phoneNumberFormatter(e.target.value)} 
          />
        </div>
        <div className="user">
          <input 
            type="text" 
            value={email} 
            name='user_email' 
            id='email' 
            placeholder='Your Email Address' 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div className="user">
          <input 
            type="text" 
            value={subject} 
            name='subject' 
            id='subject' 
            placeholder='Subject' 
            onChange={(e) => setSubject(e.target.value)} 
          />
        </div>
        <div className="user">
          <textarea 
            id='body' 
            value={message} 
            name='message' 
            placeholder='Detail' 
            onChange={(e) => setMessage(e.target.value)} 
          />
        </div>
          <button 
            type='submit' 
            value='Send'
            disabled={loading} 
            className="submit"
          >
            {loading ? 'Sending...' : 'Submit'}
          </button>
    </form>
  );
};

export default GetStarted;