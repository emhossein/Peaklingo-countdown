import React from "react";
import { useOpenSidebar } from "../../context/SidebarState";

function Hamburger() {
  const { open, setOpen } = useOpenSidebar();

  return (
    <div>
      <div
        id="hamburger"
        className={open ? "open" : ""}
        onClick={() => setOpen(!open)}
      >
        <span id="slice"></span>
        <span id="slice"></span>
        <span id="slice"></span>
      </div>
    </div>
  );
}

export default Hamburger;
