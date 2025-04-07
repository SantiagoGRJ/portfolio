'use client';
import { useState, useEffect } from "react";

type Props = {};

function Header({}: Props) {
  const [hasBackground, setHasBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldHaveBackground = window.scrollY > 50;
      if (shouldHaveBackground !== hasBackground) {
        setHasBackground(shouldHaveBackground);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasBackground]);

  return (
    <header id="header"
      className={`h-14 fixed top-0 left-0 right-0 z-10 flex items-center justify-around p-10 transition-colors duration-300 ${
        hasBackground ? "bg-gray-900 shadow-md" : "bg-transparent"
      }`}
    >
      <div>
        <h1 className="text-white font-bold"><a href="#home">Home</a></h1>
      </div>
      <nav>
        <ul className="flex gap-4">
          <li className="px-2 py-4 cursor-pointer">
            <a href="#about-me" className="text-gray-100 hover:text-gray-300">
              Acerca de Mi
            </a>
          </li>
          <li className="px-2 py-4 cursor-pointer">
            <a href="#projects" className="text-gray-100 hover:text-gray-300">
              Proyectos
            </a>
          </li>
          <li className="px-2 py-4 cursor-pointer">
            <a href="#contact" className="text-gray-100 hover:text-gray-300">
              Contáctame
            </a>
          </li>
          <li className="px-2 py-4 cursor-pointer text-gray-100 hover:text-gray-300">
            CV
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;