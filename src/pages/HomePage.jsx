import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/court-iq.png'

function HomePage() {
  return (
    <main className="home-page bg-slate-900 h-screen text-center p-10 pt-20">
      <h1 className="text-5xl text-white p-5">
      <img src={logo} alt="logo" /></h1>

      <Link to="/players">
        <div className="homePage text-xl font-mono md:text-2xl lg:text-3xl text-white p-5 font-bold m-14 rounded-full border-4 hover:bg-blue-700">
          Players
        </div>
      </Link>

      <Link to="/teams">
        <div className="home-page text-xl font-mono md:text-2xl lg:text-3xl text-white p-5 font-bold m-14 rounded-full border-4 hover:bg-blue-700">
          Team
        </div>
      </Link>
    </main>
  );
}

export default HomePage;
