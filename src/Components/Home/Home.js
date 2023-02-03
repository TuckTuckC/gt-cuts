import React from 'react';
import './Home.css';

import proPress from '../../images/bestWork/proPress.jpg'
import perfectCut from '../../images/bestWork/perfectCut.jpg'
import cleanPanel from '../../images/bestWork/cleanPanel.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import {useEffect, useState} from 'react';

function Home({setOpened}) {

  const getStarted = document.querySelector('.GetStarted')
  const buttons = document.querySelectorAll("[data-carousel-button]");

//   const change = (e) => {
//     let button = e.target;
//     const offset = button.dataset.carouselButton === 'next' ? 1 : -1
//     const slides = button
//     .closest('[data-carousel]')
//     .querySelector('[data-slides]')
//     const activeSlide = slides.querySelector('[data-active]');
//     let newIndex = [...slides.children].indexOf(activeSlide) + offset
//     if (newIndex < 0) newIndex = slides.children.length - 1;
//     if (newIndex >= slides.children.length) newIndex = 0
//     slides.children[newIndex].dataset.active = true;
//     delete activeSlide.dataset.active;
//     console.log(buttons);
// }
  

  useEffect(() => {
    const buttons = document.querySelectorAll("[data-carousel-button]");
    buttons.forEach(button => {
    button.addEventListener("click", () => {
      const offset = button.dataset.carouselButton === 'next' ? 1 : -1
      const slides = button
        .closest('[data-carousel]')
        .querySelector('[data-slides]');

        const activeSlide = slides.querySelector('[data-active]');
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;

        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
      })
    })
  }, []);
  

  return (
    <div className='component home'>
      <div className='name'>GT Streamlined</div>
      <div className="carouselContainer">
        <div className="carousel" data-carousel>
          <button className="carouselButton prev" data-carousel-button='prev'>
            <FontAwesomeIcon className='nav-icon' icon={faArrowLeft} />
          </button>
          <button className="carouselButton next" data-carousel-button='next'>
            <FontAwesomeIcon className='nav-icon' icon={faArrowRight} />
          </button>
          <ul data-slides>
            <li className="slide" data-active>
              <img src={perfectCut} alt="copper plumbing" />
            </li>
            <li className="slide">
              <img src={proPress} alt="copper plumbing"/>
            </li>
            <li className="slide">
              <img src={cleanPanel} alt="copper plumbing" />
            </li>
          </ul>
        </div>
      </div>
      <div className='component Home'>
        <div className="column">
          <h1>Located in Bumbcombe & Haywood County</h1>
          <div className="divider"></div>
          <h1>Keeping Homes Beautiful and Maintained!</h1>
        </div>

        <div className="column2">
          <p>"We will bring fresh and innovative ideas and solutions, along with a variety of quality services, to help improve and polish your everyday life"</p>
          <div className="contact">
            <h3>Contact Us</h3>
            <p>Call Us: <a href="tel:8284050462" className="contactLink phone">(828) 405-0462</a><a href="tel:8284050462" className="contactLink phone">(828) 318-6633</a></p>
            <p>Email Us: <a className='contactLink email' href="mailto: GT.Streamlined1@gmail.com">GT.Streamlined1@gmail.com</a></p>
          </div>
        </div>
        
        <button className='start' onClick={() => setOpened(true)}>GET STARTED</button>

      </div>
    </div>

  );
};

export default Home;
