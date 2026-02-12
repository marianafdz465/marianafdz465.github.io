
import React, { useState, useRef, useEffect } from 'react';
import { askAssistant } from '../services/geminiService';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: "Hi! I'm Mariana's research assistant. Want to know about my latest paper or research focus?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    const response = await askAssistant(userMsg);
    
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'ai', text: response }]);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="bg-white/90 backdrop-blur-xl border border-[#FADADD] w-80 sm:w-96 rounded-3xl shadow-2xl flex flex-col h-[500px] overflow-hidden">
          {/* Header */}
          <div className="bg-[#FADADD]/30 p-4 border-b border-[#FADADD] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-pink-400 shadow-sm">
                ✨
              </div>
              <span className="font-semibold text-gray-700">Research Bot</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-2 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-pink-400 text-white rounded-tr-none' 
                    : 'bg-beige-100 text-gray-700 border border-beige-200 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-beige-100 px-4 py-2 rounded-2xl rounded-tl-none border border-beige-200">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-pink-300 rounded-full animate-bounce" />
                    <div className="w-1.5 h-1.5 bg-pink-300 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <div className="w-1.5 h-1.5 bg-pink-300 rounded-full animate-bounce [animation-delay:-0.3s]" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-beige-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about research..."
              className="flex-1 bg-beige-50 border border-beige-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-200 transition-all"
            />
            <button 
              type="submit" 
              className="bg-pink-400 text-white p-2 rounded-xl hover:bg-pink-500 transition-all shadow-md active:scale-95"
            >
              <svg className="w-5 h-5 rotate-90" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
            </button>
          </form>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-pink-400 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-pink-100 hover:scale-110 transition-all active:scale-95 group"
        >
          <svg className="w-6 h-6 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
        </button>
      )}
    </div>
  );
};

export default AIAssistant;