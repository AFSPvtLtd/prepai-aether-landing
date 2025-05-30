import React, { createContext, useContext, useState } from 'react';
import AuthModal from './AuthModal';

interface AuthManagerContextType {
  isAuthModalOpen: boolean;
  openAuthModal: () => void;
  closeAuthModal: () => void;
}

const AuthManagerContext = createContext<AuthManagerContextType | null>(null);

export const useAuthManager = () => {
  const context = useContext(AuthManagerContext);
  if (!context) {
    throw new Error('useAuthManager must be used within an AuthManagerProvider');
  }
  return context;
};

export const AuthManagerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);

  const value = {
    isAuthModalOpen,
    openAuthModal,
    closeAuthModal,
  };

  return (
    <AuthManagerContext.Provider value={value}>
      {children}
      <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
    </AuthManagerContext.Provider>
  );
};

export default AuthManagerContext;
