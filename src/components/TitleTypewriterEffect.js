import React, { useEffect, useState } from 'react'

import Typewriter from 'typewriter-effect';

const TitleTypewriterEffect = () => {
  const [steps, setSteps] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });

  const showNext = (step, delay) => {
    return (state) => {
      setTimeout(() => {
        setSteps((prevSteps) => ({ ...prevSteps, [step]: true }));
        state.elements.cursor.style.display = 'none';
      }, delay);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setSteps(prevSteps => ({...prevSteps, 1: true }))
    }, 1000)
  })

  return (
    <div className='typewritter-sentences'>
      {steps['1'] === false && '**knuckle cracking sounds..**'}
      {steps['1'] === true && <Typewriter
        onInit={(typewriter) => {
          typewriter
            .changeDelay(30)
            .typeString('Hello strangre,')
            .pauseFor(900)
            .deleteChars(3)
            .typeString('er,')
            .callFunction(showNext(2))
            .start(); 
        }}
      />}
      {steps['2'] === true && <Typewriter
        onInit={(typewriter) => {
          typewriter
            .changeDelay(35)
            .pauseFor(500)
            .typeString('my name is Tasos and I am a software engineer.')
            .callFunction(showNext(3))
            .start();
        }}
      />}
      {steps['3'] === true && <Typewriter
        onInit={(typewriter) => {
          typewriter
            .changeDelay(40)
            .pauseFor(600)
            .typeString('You won\'t find anything spicy here, I\'m just flexing my ReactJS, Javascript, and CSS skills.')
            .callFunction(showNext(4))
            .start();
        }}
      />}
      {steps['4'] === true && <Typewriter
        onInit={(typewriter) => {
          typewriter
            .changeDelay(45)
            .pauseFor(300)
            .typeString('If you want to email me, bummer! I won\'t share my email address publicly but,')
            .callFunction(showNext(5))
            .start();
        }}
      />}
      {steps['5'] === true && <Typewriter
        onInit={(typewriter) => {
          typewriter
            .changeDelay(50)
            .pauseFor(400)
            .typeString('you can find me on LinkedIn! I\'m more than happy to connect with you! :)')
            .callFunction(showNext(6, 700))
            .start();
        }}
      />}
      {steps['6'] && <div className='linkedin-link'>
        <a href='https://www.linkedin.com/in/tasosboulis/' target='_blank' rel='noopener noreferrer'>link to my LinkedIn profile</a>
        </div>}
    </div>
  );
}

export default TitleTypewriterEffect;