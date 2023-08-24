import { useState } from "react";

const SidebarButton = ({show}) => {

    return (
        <button
        onClick={() => setIsClicked(!isClicked)}
        className="mb-4 px-3 py-1 bg-blue-600 text-white rounded-md"
      >
        {isClicked ? "Close Sidebar" : "Open Sidebar"}
      </button>
    );
};

export default SidebarButton;