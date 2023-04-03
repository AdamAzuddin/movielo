import React from 'react'
import Link from 'next/link'

const OverlayMenu = () => {
  return (
    <div>
      <Link style={{color:'silver'}} href='../pages/MyProfile'>My Account</Link>
      <Link style={{color:'silver'}} href='../pages/MyProfile'>Username</Link>
      <Link style={{color:'silver'}} href='../pages/Genre'>Genre</Link>
      <Link style={{color:'silver'}} href='../pages/Movies'>Movies</Link>
      <Link style={{color:'silver'}} href='../pages/Series'>Series</Link>
      <Link style={{color:'silver'}} href='../pages/MyList'>My List</Link>
      <Link style={{color:'silver'}} href='../pages/About'>About</Link>
      <div style={{color:'silver'}}>Log Out</div>
    </div>
    
  )
}

export default OverlayMenu