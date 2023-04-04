/*set this component to client component
 to make sure using useState,
 useEffect etc is possible in its children */
"use client";

import React from "react";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect, useRef } from "react";
import { IoMdMenu } from "react-icons/io";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  container: {
    background: "linear-gradient(315deg, #b1bfd8 0%, #667eaa 74%)",
  },
  wrapper: {
    padding: "20px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  hamburber: {
    width: "30px",
    height: "3px",
    background: "#fff",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgb(255, 101, 47,.2)",
    "&::before": {
      content: "''",
      position: "absolute",
      width: "30px",
      height: "3px",
      background: "#fff",
      borderRadius: "5px",
    },
    "&::after": {
      content: "''",
      position: "absolute",
      width: "30px",
      height: "3px",
      background: "#fff",
      borderRadius: "5px",
    },
  },
  activeHamburger: {
    width: "30px",
    height: "3px",
    borderRadius: "5px",
    background: "transparent",
    "&::before": {
      content: "''",
      position: "absolute",
      width: "30px",
      height: "3px",
      background: "#fff",
      borderRadius: "5px",
    },
    "&::after": {
      content: "''",
      position: "absolute",
      width: "30px",
      height: "3px",
      background: "#fff",
      borderRadius: "5px",
    },
  },
  sidenav: {
    position: "fixed",
    width: "40%",
    height: "100vh",
    background: "linear-gradient(150deg, #b1bfd8 0%, #667eaa 74%)",
    transform: "translateX(-100%)",
    transition: "all 0.5s ease-in-out",
  },
  activeSidenav: {
    position: "fixed",
    width: "40%",
    height: "100vh",
    background: "linear-gradient(150deg, #b1bfd8 0%, #667eaa 74%)",
    transform: "translateX(0%)",
    transition: "all 0.5s ease-in-out",
  },
  ul: {
    listStyleType: "none",
    "& li": {
      padding: "20px 0",
    },
  },
  a: {
    margin: "20px 0",
    color: "white",
  },
}));

const data = [
  {
    name: "My Account",
    Link: "../pages/MyProfile",
  },
  {
    name: "Genre",
    Link: "/../pages/Genre",
  },
  {
    name: "Movies",
    Link: "/../pages/Movies",
  },
  {
    name: "Series",
    Link: "/../pages/Series",
  },
  {
    name: "My List",
    Link: "/../pages/MyList",
  },
  {
    name: "About",
    Link: "/../pages/About",
  },
  {
    name: "Log Out",
    Link: "/../pages/SignIn",
  },
];

const Header = () => {
  const [active, setActive] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActive(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menuRef]);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "auto";
  }, [active]);

  const handleMenuClick = () => {
    setActive(!active);
  };

  return (
    <div>
      <div
        style={{
          background: "linear-gradient(315deg, #b1bfd8 0%, #667eaa 74%)",
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
        </div>
      </div>
      <div
        ref={menuRef}
        style={{
          position: "fixed",
          width: "40%",
          height: "100vh",
          background: "linear-gradient(150deg, #b1bfd8 0%, #667eaa 74%)",
          transform: active ? "translateX(0%)" : "translateX(-100%)",
          transition: "all 0.5s ease-in-out",
        }}
      >
        <ul style={{ listStyleType: "none" }}>
          {data.map((item, i) => (
            <li key={i}>
              <Link href={item.Link} onClick={()=> setActive(false)}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
