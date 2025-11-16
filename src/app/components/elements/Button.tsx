import React from 'react';

interface ButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text = 'مشاهده تور', onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white py-2 px-6 rounded-full text-sm font-medium ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
