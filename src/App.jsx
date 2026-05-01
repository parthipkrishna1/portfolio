import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";

function App() {
  return (
      <main className="bg-black text-white min-h-screen">
          <div className="text-white min-h-screen bg-gradient-to-br from-black via-purple-950/40 to-black">
        <Navbar />
        <Hero />
        <About />
        <Skills />
          </div>
      </main>
  );
}

export default App;