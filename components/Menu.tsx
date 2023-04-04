import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io"
import OverlayMenu from './OverlayMenu';

const Menu = () => {
  // set a state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div>
      {/* hamburger icon */}
      <IoMdMenu size={32} style={{ color: "#FFFFFF" }} onClick={handleMenuToggle} />
      {isMenuOpen && (
        <div style={{ position: 'absolute', backgroundColor: '#0a0a0a', width: '300px',height: '100%',padding:'16px'}}>
          <OverlayMenu/>
        </div>
      )}
    </div>
  )
}

export default Menu
