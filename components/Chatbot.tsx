import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, User, Bot, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([
    { role: 'assistant', content: "Welcome to VEL WORLD. I am your Global Trade Assistant. How can I help you navigate our portfolio today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages, { role: 'user', content: userMessage }].map(m => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content }]
        })),
        config: {
          systemInstruction: "You are the VEL WORLD Assistant, a professional representative of VEL WORLD Global Trade Excellence. You are helpful, efficient, and knowledgeable about Indian exports: Agricultural products (Onion, Banana, Cashews, Chillies, Rice), Coconut products, Safety matches, Engineering (Steel MS/SS), Apparels, and Construction (Granite). Keep responses concise and professional. Encourage users to use the contact form or WhatsApp for formal quotes. You are representing a high-end, reliable trading firm.",
          temperature: 0.7,
        },
      });

      const assistantText = response.text || "I apologize, I'm having trouble processing that request. Please try again or contact our team directly via WhatsApp.";
      setMessages(prev => [...prev, { role: 'assistant', content: assistantText }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Our AI assistant is temporarily offline. Please reach us via the Contact Form or WhatsApp for immediate assistance." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 left-8 z-[150]">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 left-0 w-[350px] md:w-[400px] h-[500px] bg-white dark:bg-[#1c1c1e] rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-black/5 dark:border-white/10 overflow-hidden flex flex-col animate-apple-up">
          {/* Header */}
          <div className="p-6 bg-[#fbfbfd] dark:bg-[#2c2c2e] border-b border-black/5 dark:border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#0066cc] rounded-full flex items-center justify-center text-white">
                <Bot size={20} />
              </div>
              <div>
                <h4 className="text-[11px] font-black tracking-[0.2em] text-[#1d1d1f] dark:text-white uppercase">VEL Assistant</h4>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[9px] font-bold text-green-500 uppercase tracking-widest">Online</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors">
              <X size={20} className="text-[#86868b]" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-[#0066cc] text-white rounded-tr-none shadow-sm' 
                    : 'bg-black/5 dark:bg-white/5 text-[#1d1d1f] dark:text-[#f5f5f7] rounded-tl-none'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-black/5 dark:bg-white/5 p-4 rounded-2xl rounded-tl-none">
                  <Loader2 size={18} className="animate-spin text-[#0066cc]" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="p-6 border-t border-black/5 dark:border-white/5 bg-white dark:bg-[#1c1c1e]">
            <div className="relative flex items-center">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about exports..."
                className="w-full bg-black/5 dark:bg-white/5 rounded-full px-6 py-4 pr-14 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0066cc]/20 dark:text-white transition-all"
              />
              <button 
                type="submit"
                disabled={!input.trim() || isLoading}
                className="absolute right-2 p-3 bg-[#0066cc] text-white rounded-full hover:scale-110 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100"
              >
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-16 h-16 bg-[#0066cc] text-white rounded-full shadow-[0_20px_40px_rgba(0,102,204,0.3)] hover:shadow-[0_25px_50px_rgba(0,102,204,0.5)] hover:scale-110 active:scale-95 transition-all duration-500 flex items-center justify-center group"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
        
        {/* Tooltip */}
        {!isOpen && (
          <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-white/90 dark:bg-[#2c2c2e]/90 backdrop-blur-md border border-black/5 dark:border-white/10 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0 pointer-events-none whitespace-nowrap">
            <span className="text-[10px] font-black tracking-[0.2em] text-[#1d1d1f] dark:text-white uppercase">Inquiry Chat</span>
          </div>
        )}
      </button>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default Chatbot;