import { useState } from "react";
import { BiMenuAltRight, BiX } from "react-icons/bi"; // Alt icon for a cleaner look

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => setMenu(!menu);

  // Nav links array to keep code clean
  const navLinks = ["Home", "Order", "Contact"];

  return (
    <div className="flex justify-center">
      <nav className="w-[95%] sm:w-[90%] max-w-7xl mt-4 p-4 sm:px-10 bg-dark backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-between fixed z-50">
        <h1 className="text-2xl font-bold tracking-tight text-white italic">
          Isha's<span className="text-accent text-3xl">.</span>
        </h1>

        <ul className="hidden sm:flex gap-8 text-white font-medium">
          {navLinks.map((link) => (
            <li
              key={link}
              className="hover:text-accent transition-colors cursor-pointer"
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <div
          className="sm:hidden z-60 text-white cursor-pointer"
          onClick={toggleMenu}
        >
          {menu ? <BiX size={32} /> : <BiMenuAltRight size={32} />}
        </div>

        {/* Modern Mobile Overlay */}
        <div
          className={`
            fixed -inset-2 h-screen w-screen bg-dark backdrop-blur-xl transition-all duration-500 flex flex-col justify-center
            ${menu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
          `}
        >
          <ul className="space-y-8 text-center">
            {navLinks.map((link, i) => (
              <li
                key={link}
                style={{ transitionDelay: `${i * 100}ms` }}
                className={`
                  text-3xl font-semibold text-white transition-all duration-700
                  ${menu ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
                `}
                onClick={toggleMenu}
              >
                <span className="hover:text-accent cursor-pointer">{link}</span>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
