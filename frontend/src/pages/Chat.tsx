import { useState } from 'react';
import api from '../api';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input) return;
    const userMessage: Message = { role: 'user', content: input };
    setMessages((m) => [...m, userMessage]);
    setInput('');
    try {
      const res = await api.post('/chat', { message: input });
      const assistantMessage: Message = { role: 'assistant', content: res.reply };
      setMessages((m) => [...m, assistantMessage]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col h-screen p-4">
      <div className="flex-1 overflow-y-auto space-y-2">
        {messages.map((m, i) => (
          <div key={i} className={m.role === 'user' ? 'text-right' : ''}>
            <span className="px-2 py-1 rounded bg-gray-200 inline-block">
              {m.content}
            </span>
          </div>
        ))}
      </div>
      <form onSubmit={send} className="mt-2 flex">
        <input
          className="flex-1 border p-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="px-4 py-2 bg-blue-500 text-white">Send</button>
      </form>
    </div>
  );
}
