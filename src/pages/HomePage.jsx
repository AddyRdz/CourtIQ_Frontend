import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <main className="bg-slate-950 h-screen text-center p-10 ">
      <h1 className="text-5xl text-white p-5">CourtIQ</h1>

      <div className="bg-slate-600  text-center p-10 my-14 rounded-full border-4 hover:bg-blue-700 hover:cursor-pointer">
        <div className="text-xl md:text-2xl lg:text-3xl font-bold">Players</div>
      </div>
      <Link to="/teams" className="bg-slate-600  text-center p-10  rounded-full border-4 hover:bg-blue-700 hover:cursor-pointer"></Link>
        <div className="text-xl md:text-2xl lg:text-3xl font-bold">Team</div>
    
    </main>
  )
}

export default HomePage