import React from 'react';

type AlertProps = {
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  description: string;
  icon?: React.ReactNode;
  onClose: () => void;
};

const Alert: React.FC<AlertProps> = ({ type, title, description, icon, onClose }) => {
  const baseStyle = 'px-4 py-3 rounded relative mb-4 flex items-start';
  let typeStyle = '';

  switch (type) {
    case 'success':
      typeStyle = 'bg-green-100 border border-green-400 text-green-700';
      break;
    case 'error':
      typeStyle = 'bg-red-100 border border-red-400 text-red-700';
      break;
    case 'warning':
      typeStyle = 'bg-yellow-100 border border-yellow-400 text-yellow-700';
      break;
    case 'info':
      typeStyle = 'bg-blue-100 border border-blue-400 text-blue-700';
      break;
    default:
      typeStyle = 'bg-gray-100 border border-gray-400 text-gray-700';
      break;
  }

  return (
    <div className={`${baseStyle} ${typeStyle}`} role="alert">
      {icon && <div className="mr-3">{icon}</div>}
      <div className=''>
        <strong className="font-bold">{title}</strong>
        <span className="block">{description}</span>
      </div>
      {/* <button
        type="button"
        className="absolute top-0 bottom-0 right-0 px-4 py-3"
        onClick={onClose}
      >
        <span className="text-2xl">&times;</span>
      </button> */}
    </div>
  );
};

export default Alert;
