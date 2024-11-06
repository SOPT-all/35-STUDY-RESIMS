import React from 'react';

export const Button = ({
  children,
  onClick,
  className = '',
  variant = 'default',
}) => {
  const baseStyle =
    'py-2 px-4 rounded text-white flex items-center justify-center';
  const variantStyle =
    variant === 'outline'
      ? 'bg-transparent border border-gray-700 text-gray-700'
      : 'bg-gray-800';

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variantStyle} ${className}`}
      style={{
        backgroundColor: variant === 'default' ? 'bg-gray-800' : 'transparent',
      }}
    >
      {children}
    </button>
  );
};
