import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";

function App() {
  return (
      <main className="bg-black text-white min-h-screen">
          <div className="text-white min-h-screen bg-gradient-to-br from-black via-purple-950/40 to-black">
        <Navbar />
        <Hero />
        <About />
          </div>
      </main>
  );
}

export default App;