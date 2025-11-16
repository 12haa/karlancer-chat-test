import React from 'react';

interface SupportCardProps {
  title: string;
  content: string;
  icon?: React.ReactNode;
}

const SupportCard: React.FC<SupportCardProps> = ({ title, content, icon }) => {
  return (
    <div className="bg-white max-w-[388px] rounded-2xl shadow-sm py-4 px-3 flex min-h-[100px] items-start gap-4 max-w-md">
      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
        {icon || (
          <div className="relative">
            <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
            <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></div>
          </div>
        )}
      </div>
      <div className="flex-grow overflow-hidden flex flex-col">
        <h3 className="text-gray-800 font-semibold text-right mb-1">{title}</h3>
        <p className="text-gray-600 text-right text-sm overflow-hidden overflow-ellipsis line-clamp-2 flex-grow">
          {content}
        </p>
      </div>
    </div>
  );
};

export default SupportCard;
