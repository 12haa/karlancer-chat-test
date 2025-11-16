import React, { ReactNode } from 'react';
import Image from 'next/image';

interface IconButtonProps {
  size?: number;
  iconColor?: string;
  backgroundColor?: string;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode | string;
  text?: string;
  textPosition?: 'top' | 'bottom' | 'left' | 'right';
  gap?: number;
}

const IconButton: React.FC<IconButtonProps> = ({
  size = 56,
  backgroundColor = '#f4f7f9',
  onClick,
  className = '',
  icon,
  text,
  textPosition = 'bottom',
  gap = 4,
}) => {
  const flexDirection = {
    top: 'flex-col-reverse',
    bottom: 'flex-col',
    left: 'flex-row-reverse',
    right: 'flex-row',
  }[textPosition];

  return (
    <button
      onClick={onClick}
      className={`flex ${flexDirection} items-center justify-center cursor-pointer outline-none ${className}`}
      style={{ gap: `${gap}px` }}
      aria-label={text || 'Icon button'}
    >
      {icon && (
        <div
          className={`w-[${size}px] h-[${size}px] rounded-[18px] border border-gray-200 flex justify-center items-center shadow-sm hover:shadow-md transition-all p-2`}
          style={{ backgroundColor }}
        >
          {typeof icon === 'string' ? (
            <Image src={icon} alt="Icon" width={24} height={24} className="object-contain" />
          ) : (
            icon
          )}
        </div>
      )}
      {text && <span className="text-sm text-gray-700">{text}</span>}
    </button>
  );
};

export default IconButton;
