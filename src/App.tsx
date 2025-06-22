import React, { useState, useEffect, useRef } from 'react';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { LoadingIndicator } from './components/LoadingIndicator';
import { ErrorMessage } from './components/ErrorMessage';
import { ApiKeyInput } from './components/ApiKeyInput';
import { ChatHeader } from './components/ChatHeader';
import { SettingsModal } from './components/SettingsModal';
import { WelcomeMessage } from './components/WelcomeMessage';
import { useChat } from './hooks/useChat';
import { OpenAIService } from './services/openai';

const API_KEY_STORAGE = 'mathisia_openai_key';

function App() {
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [showSettings, setShowSettings] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const { messages, isLoading, error, sendMessage, clearChat, clearError } = useChat(apiKey);

  // Load API key from localStorage on mount
  useEffect(() => {
    const storedKey = localStorage.getItem(API_KEY_STORAGE);
    if (storedKey && OpenAIService.isValidApiKey(storedKey)) {
      setApiKey(storedKey);
    }
  }, []);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleApiKeySubmit = (newApiKey: string) => {
    if (OpenAIService.isValidApiKey(newApiKey)) {
      setApiKey(newApiKey);
      localStorage.setItem(API_KEY_STORAGE, newApiKey);
    }
  };

  const handleClearChat = () => {
    if (window.confirm('Êtes-vous sûr de vouloir effacer toute la conversation ?')) {
      clearChat();
    }
  };

  // If no API key is set, show the API key input
  if (!apiKey) {
    return <ApiKeyInput onApiKeySubmit={handleApiKeySubmit} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <ChatHeader 
        onClearChat={handleClearChat}
        onOpenSettings={() => setShowSettings(true)}
        messageCount={messages.length}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            {messages.length === 0 ? (
              <WelcomeMessage />
            ) : (
              <div className="p-4">
                {messages.map((message) => (
                  <ChatMessage key={message.id} message={message} />
                ))}
                {isLoading && <LoadingIndicator />}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>
        </div>

        {error && (
          <ErrorMessage message={error} onDismiss={clearError} />
        )}

        <ChatInput 
          onSendMessage={sendMessage} 
          disabled={isLoading}
        />
      </div>

      <SettingsModal
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        currentApiKey={apiKey}
        onApiKeyChange={handleApiKeySubmit}
      />
    </div>
  );
}

export default App;