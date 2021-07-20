import { useState, useEffect } from 'react';

export default function useSidebar() {
  const [hiddenSidebar, sethiddenSidebar] = useState(() => {
    const storageValue = localStorage.getItem('sidebarHidden');
    return storageValue ? JSON.parse(storageValue) : true;
  });

  function handleToggleSidebar() {
    sethiddenSidebar((prevState) => (prevState !== true));
  }

  useEffect(() => {
    localStorage.setItem('sidebarHidden', JSON.stringify(hiddenSidebar));
  }, [hiddenSidebar]);

  return {
    hiddenSidebar, handleToggleSidebar,
  };
}
