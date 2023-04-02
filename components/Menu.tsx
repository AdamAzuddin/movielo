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
        <div style={{ position: 'absolute', top: '50px', backgroundColor: '#FFFFFF', width: '200px', padding: '16px' }}>
          <OverlayMenu/>
        </div>
      )}
    </div>
  )
}

export default Menu
