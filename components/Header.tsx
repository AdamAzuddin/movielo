import React from "react";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import useIsClient from "./useIsClient"

const Header = () => {
    const isClient = useIsClient()
  return (
    <header>
        {isClient? 'Client':'Server'}
      <div style={{ backgroundColor: "blue", height: "40px", display: "flex", alignItems: "center", justifyContent: "space-between"  }}>
      
        <Menu />
        <div  style={{ marginLeft: "auto", marginRight: "auto" }} >
          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
