import React from "react";

function Layout({ children }) {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f] text-[white]">
      <div className="max-w-[1000px] m-auto px-[4rem] flex flex-col justify-center h-full">
        {children}
      </div>
    </div>
  );
}

export default Layout;
