// src/AudioSentenceCheck.js
import React, { useState } from 'react';
import './AudioSentenceCheck.css';
// import audio from '../../public/word.mp3';

const AudioSentenceCheck = () => {
  const correctSentence = "Extinction";
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState('');
  const [audio] = useState(new Audio('https://res.cloudinary.com/dbrm2omel/video/upload/v1719082728/word_osbbht.mp3'));

  const handleSubmit = () => {
    const trimmedInput = userInput.trim().toLowerCase();
    const trimmedCorrect = correctSentence.trim().toLowerCase();
    if (trimmedInput === trimmedCorrect) {
      setFeedback('Your answer is correct');
    } else {
      setFeedback(`Your answer is incorrect. The correct answer is "${correctSentence}"`);
    }
  };

  const getFeedbackClass = () => {
    if (feedback.startsWith('Your answer is correct')) {
      return 'correct';
    } else if (feedback.startsWith('Your answer is incorrect')) {
      return 'incorrect';
    }
    return '';
  };

  return (
    <div className="container">
      <h1>Listen. Fill in the missing words.</h1>
      <div className="audio-control">
        <button onClick={() => audio.play()}>Play Audio</button>
      </div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Type the Word you hear"
        autoFocus
      />
      <button onClick={handleSubmit}>Submit</button>
      {feedback && <p className={`feedback ${getFeedbackClass()}`}>{feedback}</p>}
    </div>
  );
};

export default AudioSentenceCheck;
