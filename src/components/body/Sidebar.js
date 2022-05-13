import React from "react";
import { useOpenSidebar } from "../../context/SidebarState";

function Sidebar() {
  const { open } = useOpenSidebar();

  return (
    <div className={`sidebar ${open ? "open" : "close"}`}>
      <p>A simple sidebar</p>
    </div>
  );
}

export default Sidebar;
