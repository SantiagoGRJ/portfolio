"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center py-12 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      <h3 className="text-3xl font-bold text-white mb-8">Contáctame</h3>

      {/* Contenedor en línea */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Sección de correo */}
        <Card className="w-full bg-gray-800 shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-center text-xl text-white">
              Correo Electrónico
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <p className="text-gray-300 mb-4">Puedes escribirme a:</p>
            <a
              href="mailto:santiago-2003-rojas@hotmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600"
            >
              santiago-2003-rojas@hotmail.com
            </a>
          </CardContent>
        </Card>

        {/* Sección de redes sociales */}
        <Card className="w-full bg-gray-800 shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-center text-xl text-white">
              Redes Sociales
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center space-x-6">
            <a
              href="https://linkedin.com/in/santiagogrj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-800"
            >
              <div className="w-8 h-8 bg-blue-700 rounded-full"></div>
            </a>
            <a
              href="https://github.com/SantiagoGRJ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-900"
            >
              <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
            </a>
            <a
              href="https://instagram.com/santiagojavig"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600"
            >
              <div className="w-8 h-8 bg-pink-500 rounded-full"></div>
            </a>
            <a
              href="https://twitter.com/SantiagoGRJ1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500"
            >
              <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
            </a>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default Contact;


