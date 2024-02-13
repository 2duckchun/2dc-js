'use client';

import { createContext, useContext, useState } from 'react';

interface SidebarContext {
  open: () => void;
  close: () => void;
  isOpen: boolean;
  setIsOpen: (_open: boolean) => void;
}

const sidebarContext = createContext<SidebarContext | null>(null);

export const useSidebarContext = () => {
  const context = useContext(sidebarContext);
  if (!context) {
    throw new Error('sidebarContext가 생성되지 않았습니다.');
  }
  return context;
};

export const SidebarContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };

  return (
    <sidebarContext.Provider
      value={{
        open,
        close,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </sidebarContext.Provider>
  );
};
