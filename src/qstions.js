import React, { useState } from 'react';


const Question = ({ question, answer }) => {
  const [expandAnswer, setExpandAnswer] = useState(false);
  return (
    <article className='question'>
      <header>
        <h4>{question}</h4>
        <button className='btn' onClick={() => setExpandAnswer(!expandAnswer)}>
          {expandAnswer ? "-": "+" }
        </button>
      </header>
      {expandAnswer ? <p>{answer}</p> : ""}
    </article>
  );
};

export default Question;