import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../elements/Button';

interface TicketModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string, description: string) => void;
}

const TicketModal: React.FC<TicketModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (title.trim() && description.trim()) {
      onSubmit(title, description);
      setTitle('');
      setDescription('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      handleSubmit();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Blurred backdrop */}
          <motion.div
            className="absolute inset-0  bg-opacity-30 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal container */}
          <motion.div
            className="relative w-[388px] h-[490px] bg-white rounded-3xl w-full max-w-md p-6 mx-4 shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onKeyDown={handleKeyDown}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-right">ثبت تیکت پشتیبانی</h2>
              <button
                onClick={onClose}
                className="p-1 text-gray-500 hover:text-gray-700"
                aria-label="Close modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="w-full border-0.5 border-t border-[#eeeef0] my-2"></div>

            {/* Form */}
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="ticketTitle"
                  className="block text-sm font-medium text-gray-700 mb-2 text-right"
                >
                  موضوع
                </label>
                <input
                  id="ticketTitle"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-right"
                  placeholder="موضوع تیکت خود را وارد کنید"
                />
              </div>
              <div>
                <label
                  htmlFor="ticketDescription"
                  className="block text-sm font-medium text-gray-700 mb-2 text-right"
                >
                  توضیحات
                </label>
                <textarea
                  id="ticketDescription"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={5}
                  className="w-full p-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none text-right"
                  placeholder="متن توضیحات خود را وارد کنید..."
                />
              </div>
            </div>

            {/* Submit button */}
            <div className="mt-8">
              <Button text="ارسال" className="w-full" />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default TicketModal;
