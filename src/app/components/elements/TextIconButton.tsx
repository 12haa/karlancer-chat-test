import React, { ReactNode, useState } from 'react';
import Image from 'next/image';

interface TextIconButtonProps {
  icon?: string; // Default icon path
  activeIcon?: string; // Active icon path
  text?: string;
  onClick?: () => void;
  className?: string;
  iconSize?: number;
  textSize?: number;
  iconColor?: string;
  textColor?: string;
  gap?: number;
  activeColor?: string;
  isActive?: boolean;
}

const TextIconButton: React.FC<TextIconButtonProps> = ({
  icon,
  activeIcon,
  text,
  onClick,
  className = '',
  iconSize = 24,
  textSize = 14,
  iconColor,
  textColor,
  gap = 4,
  activeColor = '#10a5e7',
  isActive = false,
}) => {
  // Determine which colors to use based on active state
  const effectiveIconColor = isActive ? activeColor : iconColor;
  const effectiveTextColor = isActive ? activeColor : textColor;

  // Determine which icon to use
  const iconToUse = isActive && activeIcon ? activeIcon : icon;

  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center cursor-pointer outline-none ${className}`}
      style={{ gap: `${gap}px` }}
      aria-label={text || 'Text icon button'}
    >
      {iconToUse && (
        <div className="flex items-center justify-center">
          {typeof iconToUse === 'string' ? (
            <Image
              src={iconToUse}
              alt="Icon"
              width={iconSize}
              height={iconSize}
              className="object-contain"
              style={{
                filter: effectiveIconColor ? `drop-shadow(0 0 0 ${effectiveIconColor})` : undefined,
              }}
            />
          ) : (
            <div style={{ color: effectiveIconColor }}>{iconToUse}</div>
          )}
        </div>
      )}
      {text && (
        <span
          className="text-center"
          style={{
            fontSize: `${textSize}px`,
            color: effectiveTextColor,
          }}
        >
          {text}
        </span>
      )}
    </button>
  );
};

export default TextIconButton;
