import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <div className="flex space-x-4">
            <Link to="/">Home</Link>
            <Link to="/players">Players</Link>
            <Link to="/teams">Teams</Link>

        </div>
    </nav>
  )
}

export default Navbar