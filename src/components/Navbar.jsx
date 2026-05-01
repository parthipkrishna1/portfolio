import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">

            {/* floating glass container */}
            <div className="relative flex items-center justify-center px-8 py-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(139,92,246,0.15)]">

                {/* DESKTOP NAV */}
                <div className="hidden md:flex items-center gap-10 text-white/70">
                    <a href="#about" className="hover:text-white transition">About</a>
                    <a href="#skills" className="hover:text-white transition">Skills</a>
                    <a href="#projects" className="hover:text-white transition">Projects</a>
                    <a href="#contact" className="hover:text-white transition">Contact</a>
                </div>

                {/* MOBILE BUTTON */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden flex flex-col gap-1"
                >
                    <span className={`w-6 h-[2px] bg-white transition ${open && "rotate-45 translate-y-[6px]"}`}></span>
                    <span className={`w-6 h-[2px] bg-white transition ${open && "opacity-0"}`}></span>
                    <span className={`w-6 h-[2px] bg-white transition ${open && "-rotate-45 -translate-y-[6px]"}`}></span>
                </button>

            </div>

            {/* MOBILE FLOATING MENU */}
            <div
                className={`md:hidden fixed top-24 left-1/2 -translate-x-1/2 w-[90%] rounded-2xl bg-black/70 backdrop-blur-xl border border-white/10 transition duration-500 ${
                    open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
                }`}
            >
                <div className="flex flex-col items-center py-6 gap-6 text-lg">
                    <a onClick={() => setOpen(false)} href="#about">About</a>
                    <a onClick={() => setOpen(false)} href="#skills">Skills</a>
                    <a onClick={() => setOpen(false)} href="#projects">Projects</a>
                    <a onClick={() => setOpen(false)} href="#contact">Contact</a>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;