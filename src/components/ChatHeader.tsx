import React from 'react';
import { Trash2, Settings } from 'lucide-react';

interface ChatHeaderProps {
  onClearChat: () => void;
  onOpenSettings: () => void;
  messageCount: number;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ 
  onClearChat, 
  onOpenSettings, 
  messageCount 
}) => {
  return (
    <header className="bg-white border-b border-gray-100 px-4 py-3 sticky top-0 z-10">
      <div className="flex items-center justify-between max-w-4xl mx-auto">
        <div>
          <h1 className="text-lg font-semibold text-gray-900">MathisIA</h1>
          <p className="text-xs text-gray-500">
            {messageCount === 0 ? 'Nouvelle conversation' : `${Math.ceil(messageCount / 2)} échanges`}
          </p>
        </div>
        
        <div className="flex items-center space-x-2">
          {messageCount > 0 && (
            <button
              onClick={onClearChat}
              className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
              title="Effacer la conversation"
            >
              <Trash2 size={18} />
            </button>
          )}
          <button
            onClick={onOpenSettings}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
            title="Paramètres"
          >
            <Settings size={18} />
          </button>
        </div>
      </div>
    </header>
  );
};