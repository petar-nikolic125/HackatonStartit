import { useState, useEffect, useRef } from 'react';
import type { KeyboardEvent as ReactKeyboardEvent } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/firebase';
import { useNavigate } from 'react-router-dom';

type Role = 'user' | 'assistant';

interface Message {
  role: Role;
  content: string;
}

export default function Chat() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput]       = useState('');
  const [loading, setLoading]   = useState(false);
  const bottomRef               = useRef<HTMLDivElement | null>(null);

  /* redirect unauthenticated users */
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user) navigate('/login');
    });
    return unsub;
  }, [navigate]);

  /* auto-scroll on update */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  /* send message */
  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg: Message = { role: 'user', content: trimmed };
    const newMsgs          = [...messages, userMsg];

    setMessages(newMsgs);
    setInput('');
    setLoading(true);

    try {
      const res  = await fetch('/api/chat', {
        method : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body   : JSON.stringify({ messages: newMsgs }),
      });
      const data: { reply?: string } = await res.json();

      if (data.reply) {
        const assistantMsg: Message = { role: 'assistant', content: data.reply };
        setMessages((prev) => [...prev, assistantMsg]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  /* handle Enter */
  const handleKeyDown = (e: ReactKeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  /* UI */
  return (
      <div className="flex flex-col h-screen p-4">
        <div className="flex-1 overflow-y-auto space-y-2 mb-4">
          {messages.map((m, i) => (
              <div
                  key={i}
                  className={`p-2 rounded ${
                      m.role === 'user' ? 'bg-gray-700' : 'bg-gray-800'
                  } text-white`}
              >
                {m.content}
              </div>
          ))}
          {loading && (
              <div className="italic text-sm text-gray-400">Thinking…</div>
          )}
          <div ref={bottomRef} />
        </div>

        <div className="flex gap-2">
          <input
              className="flex-1 rounded p-2 text-black"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message"
          />
          <button
              className="btn-primary"
              onClick={sendMessage}
              disabled={loading}
          >
            Send
          </button>
        </div>
      </div>
  );
}
