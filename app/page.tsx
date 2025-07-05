'use client'; // This directive is necessary for using hooks in Next.js App Router

import React, { useState, useEffect, useRef, FormEvent } from 'react';
import { Bot, User, Send, Cpu, FlaskConical, XCircle } from 'lucide-react';

// --- Type Definitions for Messages ---
interface Message {
  role: 'user' | 'assistant';
  content: string;
  isError?: boolean;
}

// --- Main Page Component ---
export default function Home() {
  // --- State Management ---
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // --- Effect for Initial Welcome Message ---
  useEffect(() => {
    setMessages([
      {
        role: 'assistant',
        content: "Hello! I am FuturisticChem, your personal AI chemistry tutor. Feel free to ask me anything from stoichiometry to organic chemistry."
      }
    ]);
  }, []);

  // --- Effect for Scrolling to the Bottom ---
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // --- Core Function to Handle Sending a Message ---
  const handleSendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: inputValue };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');
    setIsLoading(true);

    try {
      // --- API Call to our own Next.js backend route ---
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: currentInput }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'An unknown error occurred.');
      }

      const result = await response.json();
      const botMessage: Message = { role: 'assistant', content: result.response };
      setMessages(prev => [...prev, botMessage]);

    } catch (err: any) {
      console.error(err);
      const errorMessage: Message = { 
        role: 'assistant', 
        content: `Error: ${err.message}. Please try again later.`, 
        isError: true 
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  // --- Helper to Render Formatted Content ---
  const renderContent = (content: string) => {
    // This simple version replaces newlines. For full markdown, use a library like 'react-markdown'.
    const formattedContent = content
      .replace(/\n/g, '<br />')
      .replace(/H₂O/g, 'H<sub>2</sub>O')
      .replace(/CO₂/g, 'CO<sub>2</sub>');
    return { __html: formattedContent };
  };

  // --- UI Rendering ---
  return (
    <div className="flex flex-col h-screen bg-[#212121] text-gray-200 font-sans">
      <div className="flex-1 flex flex-col items-center overflow-y-auto">
        <div className="w-full max-w-4xl px-4 pt-8 md:pt-12">
          {/* Static Title - only shown if no messages */}
          {messages.length <= 1 && (
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-400/80 flex items-center justify-center gap-3">
                <FlaskConical size={36} />
                FuturisticChem
              </h1>
            </div>
          )}

          {/* Chat Messages */}
          <div className="space-y-8">
            {messages.map((msg, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  msg.role === 'user' ? 'bg-gray-600' : 'bg-teal-700'
                }`}>
                  {msg.role === 'user' ? (
                    <User size={20} />
                  ) : msg.isError ? (
                    <XCircle size={20} className="text-red-300" />
                  ) : (
                    <Bot size={20} />
                  )}
                </div>
                <div className="flex-1 pt-1">
                  <p 
                    className={`prose prose-invert prose-p:text-gray-200 prose-p:leading-relaxed ${msg.isError ? 'text-red-400' : ''}`} 
                    dangerouslySetInnerHTML={renderContent(msg.content)}
                  />
                </div>
              </div>
            ))}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-teal-700">
                  <Cpu size={20} className="animate-pulse" />
                </div>
                <div className="flex-1 pt-1 flex items-center h-full">
                  <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce [animation-delay:-0.15s] mx-1"></div>
                  <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>

      {/* Input Form Area */}
      <footer className="w-full p-4 bg-[#212121]/80 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSendMessage} className="relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask a chemistry question..."
              disabled={isLoading}
              className="w-full bg-[#404040] border border-gray-600 rounded-xl py-3 pl-4 pr-14 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300"
            />
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-gray-500 hover:bg-teal-600 disabled:bg-gray-700 disabled:cursor-not-allowed transition-colors duration-200"
            >
              <Send size={20} className="text-gray-200" />
            </button>
          </form>
          <p className="text-center text-xs text-gray-500 mt-2">
            FuturisticChem can make mistakes. Consider checking important information.
          </p>
        </div>
      </footer>
    </div>
  );
}
