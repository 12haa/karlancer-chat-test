import React from 'react';

interface NotificationCardProps {
  date: string;
  title: string;
  content: string;
  icon?: React.ReactNode;
}

const NotificationCard: React.FC<NotificationCardProps> = ({ date, title, content, icon }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 flex h-[134px] items-start gap-4 w-full max-w-md">
      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
        {icon || (
          <div className="relative">
            <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
            <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></div>
          </div>
        )}
      </div>
      <div className="flex-grow overflow-hidden">
        <div className="flex justify-between items-start">
          <h3 className="text-gray-800 font-semibold text-right truncate max-w-[70%]">{title}</h3>
          <span className="text-xs text-gray-500 flex-shrink-0">{date}</span>
        </div>
        <p className="text-gray-600 text-right mt-1 text-sm overflow-hidden overflow-ellipsis line-clamp-3">
          {content}
        </p>
      </div>
    </div>
  );
};

export default NotificationCard;
