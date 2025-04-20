export default function AboutMe() {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl font-semibold mb-8 text-center">Sobre Mí</h2>

        <div className="space-y-6 text-gray-700">
          <p>
            Terminé la carrera en Ingeniería en Desarrollo y Gestión de Software, enfocándome en Back-End y Full-Stack.
          </p>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Experiencia con Laravel:</h3>
            <p>
              Desarrollé aplicaciones web Full-Stack con Laravel 10.x y 11.x, integrando Livewire para crear interfaces
              dinámicas y reactivas en la gestión de datos, control de acceso (roles y permisos) y búsqueda con filtros
              y paginación.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Experiencia con Next.js:</h3>
            <p>
              Desarrollé una aplicación con validaciones en Front-End y Back-End mediante Zod, utilizando server actions
              para la comunicación. Implementé una arquitectura limpia con PostgreSQL en Neon Serverless Postgres y
              desplegué en Vercel.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">API REST con Node.js:</h3>
            <p>
              He desarrollado APIs REST con Node.js, Express y TypeScript, utilizando Zod para validaciones, JWT para
              autenticación, y bcrypt para encriptar información.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
