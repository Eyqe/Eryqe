// app/page.tsx
'use client';
import { useState, useRef } from 'react';
import MoleculeViewer from './components/MoleculeViewer';
import { topics, molecules } from './chemistryData';

export default function Home() {
  const [messages, setMessages] = useState<{text: string, isUser: boolean}[]>([]);
  const [input, setInput] = useState('');
  const [currentTopic, setCurrentTopic] = useState('bonding');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { text: input, isUser: true }]);
    setInput('');
    
    try {
      // Get AI response
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: input })
      });
      
      const { response: aiResponse } = await response.json();
      setMessages(prev => [...prev, { text: aiResponse, isUser: false }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        text: "Sorry, I'm having trouble responding. Please try again.", 
        isUser: false 
      }]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 p-4">
      <header className="bg-white rounded-xl shadow-lg p-6 mb-6 text-center">
        <h1 className="text-3xl font-bold text-indigo-800">🧪 AI Chemistry Tutor</h1>
        <p className="text-indigo-600">Matriculation Malaysia - EC015 Syllabus</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Topic Navigation */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4 text-indigo-700">EC015 Topics</h2>
          <div className="space-y-3">
            {Object.entries(topics).map(([key, topic]) => (
              <button
                key={key}
                onClick={() => setCurrentTopic(key)}
                className={`w-full text-left p-3 rounded-lg transition ${
                  currentTopic === key
                    ? 'bg-indigo-100 border-2 border-indigo-500 text-indigo-800'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <h3 className="font-semibold">{topic.title}</h3>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Interface */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6 flex flex-col">
          <div className="flex-1 mb-4 overflow-y-auto max-h-[400px] space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-4 rounded-xl max-w-[80%] ${
                  msg.isUser
                    ? 'bg-indigo-100 self-end ml-auto'
                    : 'bg-gray-100 self-start'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about chemistry..."
              className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={handleSend}
              className="bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Send
            </button>
          </div>
        </div>

        {/* Visualization Area */}
        <div className="lg:col-span-3 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4 text-indigo-700">
            3D Molecular Visualization
          </h2>
          <MoleculeViewer pdbString={molecules.CH4} />
        </div>
      </div>
    </div>
  );
}
