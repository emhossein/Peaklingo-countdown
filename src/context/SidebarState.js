import { createContext, useContext, useState } from "react";

const SidebarContext = createContext(false);

export const SidebarProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ open, setOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useOpenSidebar = () => {
  const { open, setOpen } = useContext(SidebarContext);
  return { open, setOpen };
};
