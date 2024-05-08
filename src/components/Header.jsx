import React from "react";
//
const Header = () => {
  return (
    <div>
      <nav className="flex bg-orange-200 justify-between p-4">
        <div className="tracking-widest font-serif text-xl font-bold">PORTFOLIO</div>
        <div>
          <ul className="flex gap-6 tracking-widest font-semibold">
            <li>Home</li>
            <li>Contact</li>
            <li>Help</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
