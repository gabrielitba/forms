// Dependencies
import React from 'react';

// Interfaces
export interface ToastContextData {
  addToast(data: Omit<ToastMessageState, 'id'>): void;
  removeToast(id: string): void;
}

export interface ToastMessageState {
  id: string;
  type?: 'success' | 'fail' | 'info';
  title: string;
  description?: string;
}

export interface ToastProviderProps {
  children: React.ReactNode;
}
