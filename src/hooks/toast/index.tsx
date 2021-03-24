// Dependencies
import React, { createContext, useCallback, useContext, useState } from 'react';
import { v4 } from 'uuid';

// Components
import ToastContainer from '../../components/System/ToastContainer';

// Interfaces
import {
  ToastContextData,
  ToastProviderProps,
  ToastMessageState,
} from './interfaces';

// Context
const ToastContext = createContext<ToastContextData>({} as ToastContextData);

// Provider
const ToastProvider = ({ children }: ToastProviderProps) => {
  // Create state
  const [messages, setMessages] = useState<ToastMessageState[]>([]);

  // addToast
  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastMessageState, 'id'>) => {
      // Generate random id for toast
      const id = v4();

      // Create toast object
      const toast = {
        id,
        type,
        title,
        description,
      };

      // Set state
      setMessages((state) => [...state, toast]);
    },
    [],
  );

  // removeToast
  const removeToast = useCallback((id: string) => {
    setMessages((state) => state.filter((message) => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

// useToast
const useToast = (): ToastContextData => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
};

// Export modules
export { ToastProvider, useToast };
