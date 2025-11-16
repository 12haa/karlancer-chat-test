import React from 'react';

interface IconButtonProps {
  size?: number;
  iconColor?: string;
  backgroundColor?: string;
  onClick?: () => void;
  className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  size = 60,
  iconColor = '#6b9bd2',
  backgroundColor = '#f8f9fa',
  onClick,
  className,
}) => {
  const containerStyle: React.CSSProperties = {
    width: size,
    height: size,
    borderRadius: '20%',
    backgroundColor,
    border: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.2s ease',
    outline: 'none',
  };

  const cloudStyle: React.CSSProperties = {
    width: size * 0.4,
    height: size * 0.25,
    backgroundColor: iconColor,
    borderRadius: '50% 50% 0 0',
    position: 'relative',
    top: size * 0.08,
  };

  const cloudBaseStyle: React.CSSProperties = {
    width: size * 0.3,
    height: size * 0.18,
    backgroundColor: iconColor,
    borderRadius: '50%',
    position: 'absolute',
    top: size * 0.12,
    left: size * 0.05,
  };

  return (
    <button
      style={containerStyle}
      onClick={onClick}
      className={className}
      aria-label="Upload to cloud"
    >
      <div style={cloudStyle}>
        <div style={cloudBaseStyle} />
      </div>
    </button>
  );
};

export default IconButton;
