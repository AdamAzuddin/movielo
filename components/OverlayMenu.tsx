import React from "react";
import Link from "next/link";

const OverlayMenu = (props: any) => {

  const [active, setActive] = props.activeState
  return (
    <>
      <div  style={{padding: "4vh 0", borderBottom: "0.5px solid white"}}>
        <Link style={{ color: "white", paddingLeft:"15px" }} href="../pages/MyProfile" onClick={() => setActive(false)}>
          My Account
        </Link>
      </div>
      <div  style={{padding: "4vh 0", borderBottom: "0.5px solid white"}}>
        <Link style={{ color: "white", paddingLeft:"15px" }} href="../pages/MyProfile" onClick={() => setActive(false)}>
          Username
        </Link>
      </div>
      <div  style={{padding: "4vh 0", borderBottom: "0.5px solid white"}}>
        <Link style={{ color: "white", paddingLeft:"15px" }} href="../pages/Genre" onClick={() => setActive(false)}>
          Genre
        </Link>
      </div>
      <div  style={{padding: "4vh 0", borderBottom: "0.5px solid white"}}>
        <Link style={{ color: "white", paddingLeft:"15px" }} href="../pages/Movies" onClick={() => setActive(false)}>
          Movies
        </Link>
      </div>
      <div  style={{padding: "4vh 0", borderBottom: "0.5px solid white"}}>
        <Link style={{ color: "white", paddingLeft:"15px" }} href="../pages/Series" onClick={() => setActive(false)}>
          Series
        </Link>
      </div>
      <div  style={{padding: "4vh 0", borderBottom: "0.5px solid white"}}>
        <Link style={{ color: "white", paddingLeft:"15px" }} href="../pages/MyList" onClick={() => setActive(false)}>
          My List
        </Link>
      </div>
      <div  style={{padding: "4vh 0", borderBottom: "0.5px solid white"}}>
        <Link style={{ color: "white", paddingLeft:"15px" }} href="../pages/About" onClick={() => setActive(false)}>
          About
        </Link>
      </div>
      <div style={{ color: "white", paddingLeft:"15px" }}>Log Out</div>
    </>
  );
};

export default OverlayMenu;
