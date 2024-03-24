import React from 'react'
import Navbar from "./navbar";

function Header() {
  return (
    <div className='container-fluid mt-2'>
      <div className='card shadow-sm p-0'>
        <div className='card-body p-0'>
          <Navbar/>
        </div>
      </div>
    </div>
  )
}

export default Header