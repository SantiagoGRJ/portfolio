import Image from "next/image"
import Link from "next/link"
import TechCarousel from "@/components/tech-carousel"
import ContactSection from "@/components/contact-section"
import AboutMe from "@/components/about-me"
import Navbar from "@/components/navbar"
import ProjectsSection from "./projects-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-20 text-center">
        <div className="container mx-auto px-4">
          <div className="mb-8 relative mx-auto h-32 w-32 overflow-hidden rounded-full border-2 border-gray-200">
            <Image
              src="/placeholder.svg?height=128&width=128"
              alt="Santiago Gomez"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-3xl font-bold mb-2">Santiago Gomez</h1>
          <p className="text-gray-600 mb-8">Ingeniero de Software | Back-End | Algo de Front-End</p>

          <h2 className="text-2xl font-semibold mb-8">Tecnologías</h2>
          <TechCarousel />

          <div className="mt-8">
            <Link
              href="#about"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium px-6 py-2 border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Acerca de Mí
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section - Replace with the new component */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* About Me Section */}
      <AboutMe />

      {/* Footer */}
      <footer className="py-8 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <div className="flex justify-center space-x-8 mb-4">
            <Link href="/" className="hover:text-gray-800">
              Home
            </Link>
            <Link href="#about" className="hover:text-gray-800">
              Acerca de Mí
            </Link>
            <Link href="#projects" className="hover:text-gray-800">
              Proyectos
            </Link>
            <Link href="#contact" className="hover:text-gray-800">
              Contáctame
            </Link>
            <Link href="#cv" className="hover:text-gray-800">
              CV
            </Link>
          </div>
          <p>© 2023 Santiago. Todos los derechos reservados.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link href="https://linkedin.com/in/santiagogrj/" className="text-gray-400 hover:text-gray-600">
              LinkedIn
            </Link>
            <Link href="https://github.com/SantiagoGRJ" className="text-gray-400 hover:text-gray-600">
              GitHub
            </Link>
            <Link href="https://x.com/SantiagoGRJ1" className="text-gray-400 hover:text-gray-600">
              Twitter
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
