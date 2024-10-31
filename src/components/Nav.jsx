import { NavbarBrand, Navbar, NavbarToggle, NavbarLink, NavbarCollapse } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/court-iq.png'

function Nav() {
  return (
    <Navbar fluid rounded className="px-4">
      <div className="flex w-full items-center justify-between">
        <NavbarBrand as={Link} to="/" className="flex items-center">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
        </NavbarBrand>
        
        <div className="flex gap-4">
          <Link to="/" className="text-gray-700 hover:text-blue-700">
            Home
          </Link>
          <Link to="/players" className="text-gray-700 hover:text-blue-700">
            Players
          </Link>
          <Link to="/teams" className="text-gray-700 hover:text-blue-700">
            Teams
          </Link>
        </div>
      </div>
    </Navbar>
    
    
  )
}

export default Nav

{/* <nav>
        <div className="flex space-x-4">
            <Link to="/">Home</Link>
            <Link to="/players">Players</Link>
            <Link to="/teams">Teams</Link>

        </div>
    </nav> */}