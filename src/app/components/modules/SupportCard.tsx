import React from 'react';
import { formatRelativeTime } from '../../constants/index';

interface SupportCardProps {
  title: string;
  content: string;
  status: string;
  timestamp: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const SupportCard: React.FC<SupportCardProps> = ({ title, content, status, timestamp, icon, onClick }) => {
  // Define status colors
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'باز':
        return 'bg-green-500';
      case 'در حال بررسی':
        return 'bg-yellow-500';
      case 'پاسخ داده شده':
        return 'bg-blue-500';
      case 'بسته شده':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div
      className="bg-white max-w-[388px] rounded-2xl shadow-sm py-4 px-3 flex min-h-[120px] items-start gap-4 max-w-md cursor-pointer"
      onClick={onClick}
    >
      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
        {icon || (
          <div className="relative">
            <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
            <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></div>
          </div>
        )}
      </div>
      <div className="flex-grow overflow-hidden flex flex-col">
        <div className="flex justify-between items-start">
          <h3 className="text-gray-800 font-semibold text-right">{title}</h3>
          <span className="text-xs text-gray-500 whitespace-nowrap pr-2">
            {formatRelativeTime(timestamp)}
          </span>
        </div>
        <p className="text-gray-600 text-right text-sm overflow-hidden overflow-ellipsis line-clamp-2 flex-grow mt-1">
          {content}
        </p>
      </div>
    </div>
  );
};

export default SupportCard;
