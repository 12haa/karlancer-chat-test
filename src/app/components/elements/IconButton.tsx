import React, { ReactNode } from 'react';
import Image from 'next/image';

interface IconButtonProps {
  size?: number;
  iconColor?: string;
  backgroundColor?: string;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode | string;
}

const IconButton: React.FC<IconButtonProps> = ({
  size = 56,
  backgroundColor = '#f4f7f9',
  onClick,
  className = '',
  icon,
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-[${size}px] h-[${size}px] rounded-[18px] border border-gray-200 flex justify-center items-center cursor-pointer shadow-sm hover:shadow-md transition-all outline-none p-2 ${className}`}
      style={{ backgroundColor }}
      aria-label="Icon button"
    >
      {icon && (
        <div className="flex items-center justify-center w-full h-full">
          {typeof icon === 'string' ? (
            <Image src={icon} alt="Icon" width={24} height={24} className="object-contain" />
          ) : (
            icon
          )}
        </div>
      )}
    </button>
  );
};

export default IconButton;
