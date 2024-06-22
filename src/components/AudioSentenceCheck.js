// src/AudioSentenceCheck.js
import React, { useState } from 'react';
import './AudioSentenceCheck.css';
// import audio from './test.mp3';

const AudioSentenceCheck = () => {
  const correctSentence = "The quick brown fox jumps over the lazy dog";
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState('');
  const [audio] = useState(new Audio('https://res.cloudinary.com/dbrm2omel/video/upload/v1719075899/test_quj4ol.mp3'));

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
        placeholder="Type the sentence you hear"
        autoFocus
      />
      <button onClick={handleSubmit}>Submit</button>
      {feedback && <p className={`feedback ${getFeedbackClass()}`}>{feedback}</p>}
    </div>
  );
};

export default AudioSentenceCheck;
