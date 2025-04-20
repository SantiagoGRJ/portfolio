"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, FileText } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm py-3" : "bg-white/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Santiago Gomez
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-gray-700 hover:text-black transition-colors">
              Acerca de Mí
            </Link>
            <Link href="#projects" className="text-gray-700 hover:text-black transition-colors">
              Proyectos
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-black transition-colors">
              Contáctame
            </Link>

            {/* CV Dropdown - Desktop */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors">
                CV <ChevronDown size={16} className="ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem asChild>
                  <Link href="/santiago-gomez-resume.pdf" className="flex items-center">
                    <FileText size={16} className="mr-2" />
                    <span>Resume (English)</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/cv-js-ts.pdf" className="flex items-center">
                    <FileText size={16} className="mr-2" />
                    <span>JavaScript/TypeScript</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/cv-php-laravel.pdf" className="flex items-center">
                    <FileText size={16} className="mr-2" />
                    <span>PHP/Laravel</span>
                  </Link>
                </DropdownMenuItem>
                
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col space-y-4">
            <Link
              href="#about"
              className="text-gray-700 hover:text-black transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Acerca de Mí
            </Link>
            <Link
              href="#projects"
              className="text-gray-700 hover:text-black transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Proyectos
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-black transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contáctame
            </Link>

            {/* CV Options - Mobile */}
            <div className="border-t border-gray-100 pt-3">
              <p className="text-sm font-medium text-gray-500 mb-2">Curriculum Vitae:</p>
              <div className="flex flex-col space-y-2 pl-2">
              <Link
                  href="/santiago-gomez-resume.pdf"
                  className="text-gray-700 hover:text-black transition-colors flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FileText size={16} className="mr-2" />
                  <span>Resume (English)</span>
                </Link>
                <Link
                  href="/cv-js-ts.pdf"
                  className="text-gray-700 hover:text-black transition-colors flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FileText size={16} className="mr-2" />
                  <span>JavaScript/TypeScript</span>
                </Link>
                <Link
                  href="/cv-php-laravel.pdf"
                  className="text-gray-700 hover:text-black transition-colors flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FileText size={16} className="mr-2" />
                  <span>PHP/Laravel</span>
                </Link>
               
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
