import React from 'react';
import { AlertCircle, X } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
  onDismiss: () => void;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onDismiss }) => {
  return (
    <div className="mx-4 mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3 animate-fade-in">
      <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
      <div className="flex-1">
        <p className="text-red-800 text-sm">{message}</p>
      </div>
      <button
        onClick={onDismiss}
        className="text-red-500 hover:text-red-700 transition-colors duration-200"
      >
        <X size={18} />
      </button>
    </div>
  );
};