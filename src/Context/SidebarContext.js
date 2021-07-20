import React, { createContext } from 'react';
import PropTypes from 'prop-types';

import useSidebar from './hooks/useSidebar';

const SidebarContext = createContext();

function SidebarProvider({ children }) {
  const { hiddenSidebar, handleToggleSidebar } = useSidebar();

  return (
    <SidebarContext.Provider value={{ hiddenSidebar, handleToggleSidebar }}>
      { children }
    </SidebarContext.Provider>
  );
}

SidebarProvider.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
};

export { SidebarContext, SidebarProvider };
