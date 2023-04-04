import React from "react";
import Link from "next/link";

const OverlayMenu = () => {
  return (
    <nav>
      <div style={{height:"50px"}}>
        <Link style={{ color: "silver" }} href="../pages/MyProfile" >
          My Account
        </Link>
      </div>
      <div style={{height:"50px"}}>
        <Link style={{ color: "silver" }} href="../pages/MyProfile">
          Username
        </Link>
      </div>
      <div style={{height:"50px"}}>
        <Link style={{ color: "silver" }} href="../pages/Genre">
          Genre
        </Link>
      </div>
      <div style={{height:"50px"}}>
        <Link style={{ color: "silver" }} href="../pages/Movies">
          Movies
        </Link>
      </div>
      <div style={{height:"50px"}}>
        <Link style={{ color: "silver" }} href="../pages/Series">
          Series
        </Link>
      </div>
      <div style={{height:"50px"}}>
        <Link style={{ color: "silver" }} href="../pages/MyList">
          My List
        </Link>
      </div>
      <div style={{height:"50px"}}>
        <Link style={{ color: "silver" }} href="../pages/About">
          About
        </Link>
      </div>
      <div style={{ color: "silver" }}>Log Out</div>
    </nav>
  );
};

export default OverlayMenu;
