/*set this component to client component
 to make sure using useState,
 useEffect etc is possible in its children */
"use client";

import React from "react";
import SearchBar from "./SearchBar";
import { useState, useEffect, useRef } from "react";
import { IoMdMenu } from "react-icons/io";
import OverlayMenu from "./OverlayMenu";


const Header = () => {
  const [active, setActive] = useState(false);
  // set an empty div element
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      // checks if the menuRef exists and 
      //if the click event target is not contained within the menuRef element
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActive(false);
      }
    };

    //if mouse is clicked
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menuRef]);

  useEffect(() => {
    // body is not scrollable wj=hen menu is in 
    // active state
    document.body.style.overflow = active ? "hidden" : "auto";
  }, [active]);

  useEffect(() => {
    // root html element is unscrollable if menu active
    document.documentElement.style.overflow = active ? "hidden" : "auto";
  })

  const handleMenuClick = () => {
    setActive(!active);
  };

  

  return (
    <div>
      <div
        style={{
          background: "#0B253F",
        }}
      >
        <div
          style={{
            padding: "20px 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {!active && (
            <IoMdMenu
              size={32}
              style={{ color: "#FFFFFF" }}
              onClick={handleMenuClick}
            />
          )}

          <div style={{ marginLeft: "auto", marginRight: "auto" }}>
            <SearchBar />
          </div>
        </div>
      </div>
      <div
        ref={menuRef}
        style={{
          position: "fixed",
          width: "40%",
          height: "100vh",
          background: "#1A1A1A ",
          // animation
          transform: active ? "translateX(0%)" : "translateX(-100%)",
          transition: "all 0.5s ease-in-out",
        }}
      >
        <OverlayMenu activeState={[active,setActive]}/>
      </div>
    </div>
  );
};

export default Header;
