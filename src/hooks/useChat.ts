import { useState, useEffect, useCallback } from 'react';
import { Message, ChatState } from '../types/chat';
import { OpenAIService } from '../services/openai';

const STORAGE_KEY = 'mathisia_chat_history';

export const useChat = (apiKey: string | null) => {
  const [state, setState] = useState<ChatState>({
    messages: [],
    isLoading: false,
    error: null
  });

  // Load messages from localStorage on component mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsedMessages = JSON.parse(stored);
        const messages = parsedMessages.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }));
        setState(prev => ({ ...prev, messages }));
      }
    } catch (error) {
      console.error('Error loading chat history:', error);
    }
  }, []);

  // Save messages to localStorage whenever messages change
  const saveMessages = useCallback((messages: Message[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch (error) {
      console.error('Error saving chat history:', error);
    }
  }, []);

  const sendMessage = useCallback(async (content: string) => {
    if (!apiKey || !OpenAIService.isValidApiKey(apiKey)) {
      setState(prev => ({ 
        ...prev, 
        error: 'Clé API OpenAI invalide ou manquante' 
      }));
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      role: 'user',
      timestamp: new Date()
    };

    // Update state with user message and loading state
    setState(prev => {
      const newMessages = [...prev.messages, userMessage];
      return {
        ...prev,
        messages: newMessages,
        isLoading: true,
        error: null
      };
    });

    try {
      const openaiService = new OpenAIService(apiKey);
      
      // Get current messages including the new user message
      const currentMessages = [...state.messages, userMessage];
      const response = await openaiService.sendMessage(currentMessages);

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        role: 'assistant',
        timestamp: new Date()
      };

      const updatedMessages = [...currentMessages, assistantMessage];
      
      setState(prev => ({ 
        ...prev, 
        messages: updatedMessages,
        isLoading: false 
      }));
      
      saveMessages(updatedMessages);
      
    } catch (error) {
      console.error('Chat error:', error);
      setState(prev => ({ 
        ...prev, 
        isLoading: false,
        error: error instanceof Error ? error.message : 'Une erreur est survenue'
      }));
    }
  }, [apiKey, state.messages, saveMessages]);

  const clearChat = useCallback(() => {
    setState(prev => ({ ...prev, messages: [], error: null }));
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const clearError = useCallback(() => {
    setState(prev => ({ ...prev, error: null }));
  }, []);

  return {
    ...state,
    sendMessage,
    clearChat,
    clearError
  };
};