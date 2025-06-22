import React from 'react';

export const LoadingIndicator: React.FC = () => {
  return (
    <div className="flex justify-start mb-4 animate-fade-in">
      <div className="max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl">
        <div className="px-4 py-3 bg-white border border-gray-100 rounded-2xl rounded-bl-md shadow-sm">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
        <div className="text-xs text-gray-500 mt-1 px-2">
          Mathis écrit...
        </div>
      </div>
    </div>
  );
};