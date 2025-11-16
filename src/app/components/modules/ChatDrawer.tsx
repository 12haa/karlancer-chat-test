import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface ChatDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  status: string;
}

const ChatDrawer: React.FC<ChatDrawerProps> = ({ isOpen, onClose, title, status }) => {
  // Define status colors
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'باز':
        return 'text-green-500';
      case 'در حال بررسی':
        return 'text-yellow-500';
      case 'پاسخ داده شده':
        return 'text-blue-500';
      case 'بسته شده':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  // Sample chat messages
  const [messages, setMessages] = useState([
    { id: 1, text: 'سلام، چطور می‌تونم کمکتون کنم؟', sender: 'support', time: '10:30' },
    { id: 2, text: 'من نمی‌تونم به حساب خودم وارد شم.', sender: 'user', time: '10:31' },
    { id: 3, text: 'می‌تونید رمز عبورتون رو چک کنید؟', sender: 'support', time: '10:32' },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const newMsg = {
        id: messages.length + 1,
        text: newMessage,
        sender: 'user',
        time: new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...messages, newMsg]);
      setNewMessage('');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop with blurry effect */}
          <motion.div
            className="absolute inset-0 bg-[#f4f4f8] bg-opacity-70"
            style={{ backdropFilter: 'blur(8px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            onClick={onClose}
          />

          {/* Chat Drawer */}
          <motion.div
            className="absolute top-0 right-0 h-full w-[100%] max-w-md bg-[#f4f4f8] shadow-lg"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30, mass: 0.8 },
              opacity: { duration: 0.2, ease: 'easeInOut' },
            }}
          >
            <div className="relative h-full flex flex-col">
              {/* Header */}
              <div className="w-full bg-white min-h-[100px] flex items-center justify-between px-4 py-3">
                <div>
                  <button
                    onClick={onClose}
                    className="p-1 rounded-full hover:bg-gray-100 z-10 cursor-pointer w-fit"
                    aria-label="Close chat"
                  >
                    <Image
                      src="../../../../assets/icons/arrowRight.svg"
                      width={28}
                      height={28}
                      alt="arrow-right"
                    />
                  </button>
                </div>
                <div className="flex flex-col items-center">
                  <h2 className="text-lg font-bold text-right">{title}</h2>
                  <span className={`text-xs mt-1 ${getStatusColor(status)}`}>{status}</span>
                </div>
                <div className="w-10"></div> {/* Spacer for alignment */}
              </div>

              {/* Chat messages */}
              <div className="flex-grow overflow-y-auto p-4 bg-[#f4f4f8] m-4 rounded-2xl">
                <div className="space-y-3">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.sender === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-2xl ${
                          message.sender === 'user'
                            ? 'bg-[#10a5e7] text-white rounded-bl-none'
                            : 'bg-white text-gray-800 rounded-br-none'
                        }`}
                      >
                        <p className="text-right">{message.text}</p>
                        <p
                          className={`text-xs mt-1 ${
                            message.sender === 'user' ? 'text-blue-200' : 'text-gray-500'
                          }`}
                        >
                          {message.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Message input */}
              <div className="p-4 bg-white m-4 rounded-2xl flex gap-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="پیام خود را بنویسید..."
                  className="flex-grow p-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-blue-500 text-white p-3 rounded-2xl hover:bg-blue-600 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-send"
                  >
                    <path d="m22 2-7 20-4-9-9-4Z" />
                    <path d="M22 2 11 13" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ChatDrawer;
