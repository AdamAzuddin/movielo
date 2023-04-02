import React from "react";
import Menu from "./Menu";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header>
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
