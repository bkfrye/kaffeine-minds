import { createContext, useCallback, useContext, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [ mobileMenuIsOpen, setMobileMenuIsOpen ] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuIsOpen(!mobileMenuIsOpen);
  }

  let sharedState = { toggleMobileMenu };

  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
