'use client';

import React, { useState } from 'react';
import { quizzes } from '../quizzes';

function shuffleArray<T>(array: T[]): T[] {
  return array
    .map((item) => ({ sort: Math.random(), value: item }))
    .sort((a, b) => a.sort - b.sort)
    .map((obj) => obj.value);
}

const Quiz = () => {
  const [selectedTopic, setSelectedTopic] = useState<string>("All");
  const filteredQuestions = selectedTopic === "All"
  ? quizzes
  : quizzes.filter((q) => q.topic === selectedTopic);

const [shuffled, setShuffled] = useState(() => shuffleArray(filteredQuestions));
const currentQuestion = shuffled[currentIndex];
  const [shuffled, setShuffled] = useState(() => shuffleArray(quizzes));
  const currentQuestion = shuffled[currentIndex];
  const [selected, setSelected] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const scoreHistory = JSON.parse(localStorage.getItem('quizScores') || '[]');

  if (selected !== currentQuestion.answer) {
  setWrongList((prev) => [...prev, currentQuestion.id]);
}
const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

const filtered = selectedTopic
  ? quizzes.filter((q) => q.topic === selectedTopic)
  : quizzes;

const [shuffled, setShuffled] = useState(() => shuffleArray(filtered));
  
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
<div className="mb-4">
  <label className="mr-2 font-semibold">Choose Topic:</label>
  <select
    value={selectedTopic}
    onChange={(e) => setSelectedTopic(e.target.value)}
    className="border rounded px-2 py-1"
  >
    <option value="All">All</option>
    <option value="Atomic Structure">Atomic Structure</option>
    <option value="Chemical Bonding">Chemical Bonding</option>
    <option value="Chemical Formulae & Equations">Chemical Formulae & Equations</option>
    <option value="Mole Concept & Stoichiometry">Mole Concept & Stoichiometry</option>
    <option value="Gas Laws">Gas Laws</option>
    <option value="Thermochemistry">Thermochemistry</option>
    <option value="Acids & Bases">Acids & Bases</option>
    <option value="Redox Reactions">Redox Reactions</option>
    <option value="Chemical Equilibrium">Chemical Equilibrium</option>
    <option value="Organic Chemistry">Organic Chemistry</option>
  </select>
</div>
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
{completed ? (
  <div className="text-center">
    <h2 className="text-2xl font-bold">Quiz Completed!</h2>
    <p className="text-lg mt-2">Your score: {score} / {quizzes.length}</p>
    {wrongList.length > 0 && (
      <button
        className="mt-4 bg-orange-500 text-white px-4 py-2 rounded"
        onClick={() => {
          const retryQuestions = quizzes.filter(q => wrongList.includes(q.id));
          setShuffled(shuffleArray(retryQuestions));
          setCurrentIndex(0);
          setCompleted(false);
          setScore(0);
          setWrongList([]);
        }}
      >
        Retry Incorrect ({wrongList.length})
      </button>
    )}
  </div>
) : ...
  useEffect(() => {
  if (completed) {
    const history = JSON.parse(localStorage.getItem('quizScores') || '[]');
    history.push({ date: new Date(), score });
    localStorage.setItem('quizScores', JSON.stringify(history));
  }
}, [completed]);
export default Quiz;
