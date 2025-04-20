import Link from "next/link"
import { Mail, Linkedin, Github, Twitter } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-12 text-center">Contáctame</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Email Contact */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-medium mb-4 flex items-center">
              <Mail className="mr-2" size={20} />
              Correo Electrónico
            </h3>
            <p className="text-gray-600 mb-4 text-sm">Puedes escribirme a:</p>
            <Link href="mailto:santiago-2003-rojas@hotmail.com" className="text-gray-800 hover:underline break-all">
              santiago-2003-rojas@hotmail.com
            </Link>
          </div>

          {/* Social Media */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-medium mb-4">Redes Sociales</h3>
            <div className="flex flex-col space-y-4">
              <Link href="https://linkedin.com/in/santiagogrj/" className="flex items-center text-gray-800 hover:text-gray-600">
                <Linkedin className="mr-2" size={20} />
                LinkedIn
              </Link>
              <Link href="https://github.com/SantiagoGRJ" className="flex items-center text-gray-800 hover:text-gray-600">
                <Github className="mr-2" size={20} />
                GitHub
              </Link>
              <Link href="https://x.com/SantiagoGRJ1" className="flex items-center text-gray-800 hover:text-gray-600">
                <Twitter className="mr-2" size={20} />
                Twitter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
