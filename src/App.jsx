import { useEffect } from "react"

function App() {

  useEffect(() => {
    const fetchStats = async () => {
      const res = await fetch('http://localhost:4000/players');
      const playersData = await res.json();
      console.log(playersData);
      
    }
    fetchStats();
  }, []);
  
  return (
    <main className="bg-slate-950 h-screen text-center p-10 ">
      <h1 className="text-5xl text-white p-5">CourtIQ</h1>

      <div className="bg-slate-600  text-center p-10 rounded-full border-4 hover:bg-blue-700 hover:cursor-pointer">
        <div className="text-xl md:text-2xl lg:text-3xl font-bold">Enter The Portal</div>
      </div>
  
    </main>
      

  )
}

export default App
