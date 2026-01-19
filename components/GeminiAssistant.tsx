
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Sparkles, X, MessageSquare, Send, Loader2 } from 'lucide-react';

export const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', content: string}[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `You are an expert AI assistant for "MetaMAP for Rhino / Grasshopper". 
          MetaMAP is a free, open-source plugin for spatial data fetching.
          Keep your answers technical, minimal, and polite. Always recommend the Yak package manager for installation.`,
        }
      });

      setMessages(prev => [...prev, { role: 'bot', content: response.text || "No response found." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', content: "Error connecting to AI. Please check your connection." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-neutral-900 hover:bg-black text-white p-4 rounded-full shadow-2xl transition-all hover:scale-105 flex items-center space-x-3"
        >
          <Sparkles size={22} className="text-emerald-400" />
          <span className="font-semibold pr-2 text-sm">MetaMAP AI</span>
        </button>
      ) : (
        <div className="bg-white w-80 sm:w-[400px] h-[550px] rounded-[32px] border border-neutral-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col overflow-hidden animate-in slide-in-from-bottom-10">
          <div className="bg-white border-b border-neutral-100 p-5 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-emerald-50 rounded-xl">
                <Sparkles className="text-emerald-600" size={18} />
              </div>
              <span className="font-bold text-neutral-900">Knowledge Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-neutral-400 hover:text-neutral-900 p-1">
              <X size={22} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-6 bg-neutral-50/50">
            {messages.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-4 border border-neutral-100">
                  <MessageSquare className="text-emerald-500" size={24} />
                </div>
                <p className="text-sm font-semibold text-neutral-900 mb-1">How can I help you?</p>
                <p className="text-xs text-neutral-500">Ask about installation, data limits, or analysis integration.</p>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-[22px] text-sm leading-relaxed shadow-sm ${m.role === 'user' ? 'bg-emerald-600 text-white rounded-tr-none' : 'bg-white text-neutral-700 border border-neutral-100 rounded-tl-none'}`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl border border-neutral-100 shadow-sm">
                  <Loader2 className="animate-spin text-emerald-500" size={18} />
                </div>
              </div>
            )}
          </div>

          <div className="p-5 bg-white">
            <form
              onSubmit={(e) => { e.preventDefault(); handleSend(); }}
              className="flex items-center space-x-3"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask MetaMAP AI..."
                className="flex-grow bg-neutral-100 border-none rounded-2xl px-5 py-3 text-sm focus:ring-2 focus:ring-emerald-500/30 transition-all outline-none text-neutral-900"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="bg-emerald-600 p-3 rounded-2xl text-white disabled:opacity-30 shadow-md hover:bg-emerald-700 transition-colors"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
