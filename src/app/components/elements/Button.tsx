import React from 'react';

interface ButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
  bgColor?: string;
  textColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  text = 'مشاهده تور',
  onClick,
  className = '',
  bgColor = 'bg-blue-500',
  textColor = 'text-white',
}) => {
  return (
    <button
      onClick={onClick}
      className={`  py-2 px-6 rounded-full text-sm font-medium ${className} ${bgColor} ${textColor}`}
    >
      {text}
    </button>
  );
};

export default Button;
