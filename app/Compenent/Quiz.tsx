'use client';

import React, { useState } from 'react';
import { quizzes } from '../quizzes';

const Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const currentQuestion = quizzes[currentIndex];

  const handleNext = () => {
    if (selected === currentQuestion.answer) setScore(score + 1);
    setSelected(null);
    setShowHint(false);
    if (currentIndex + 1 < quizzes.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCompleted(true);
    }
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      {completed ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold">Quiz Completed!</h2>
          <p className="text-lg mt-2">Your score: {score} / {quizzes.length}</p>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-semibold mb-4">Question {currentIndex + 1}</h2>
          <p className="mb-4">{currentQuestion.question}</p>
          <div className="space-y-2">
            {currentQuestion.choices.map((choice, idx) => (
              <button
                key={idx}
                className={`block w-full px-4 py-2 rounded border ${
                  selected === choice ? 'bg-blue-200' : 'bg-white'
                }`}
                onClick={() => setSelected(choice)}
              >
                {choice}
              </button>
            ))}
          </div>
          <div className="mt-4 space-x-4">
            <button onClick={() => setShowHint(true)} className="text-blue-600">Hint</button>
            <button
              onClick={handleNext}
              disabled={!selected}
              className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
          {showHint && currentQuestion.hints && (
            <div className="mt-2 text-sm text-gray-600">
              <strong>Hint:</strong> {currentQuestion.hints.join(', ')}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
