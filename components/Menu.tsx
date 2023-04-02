import React, { useState, } from "react";
import { IoMdMenu } from "react-icons/io";
import useIsClient from "./useIsClient"

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isClient = useIsClient()

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <IoMdMenu
        size={32}
        style={{ color: "#FFFFFF" }}
        onClick={handleMenuToggle}
      />
      {isMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "50px",
            backgroundColor: "#FFFFFF",
            width: "200px",
            padding: "16px",
          }}
        >
            {isClient? 'Client':'Server'}
          Overlay menu content goes here
        </div>
      )}
    </div>
  );
};

export default Menu;
