type Props = {};

function AboutMe({}: Props) {
  return (
    <section
      id="about-me"
      className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100 p-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Título */}
        <h2 className="text-4xl font-bold text-white mb-6">
          Sobre Mí
        </h2>

        {/* Descripción */}
        <p className="text-lg text-gray-300 leading-relaxed mb-8">
          Terminé la carrera en Ingeniería en Desarrollo y Gestión de Software, enfocándome en Back-End y Full-Stack.
        </p>

        {/* Detalles */}
        <div className="space-y-6 text-left">
          <p className="text-gray-300">
            <span className="text-white font-semibold">Experiencia con Laravel: </span> 
            Desarrollé aplicaciones web Full-Stack con Laravel 10.x y 11.x, integrando Livewire para crear interfaces dinámicas. Implementé buenas prácticas en la gestión de datos, control de acceso (roles y permisos), y búsqueda con filtrado y paginación.
          </p>
          <p className="text-gray-300">
            <span className="text-white font-semibold">Experiencia con Next.js: </span> 
            Desarrollé una aplicación con validaciones en Front-End y Back-End mediante Zod, utilizando server actions para la comunicación. Implementé una arquitectura limpia con PostgreSQL en Neon Serverless Postgres y desplegué la aplicación en Vercel.
          </p>
          <p className="text-gray-300">
            <span className="text-white font-semibold">APIs REST con Node.js: </span> 
            He desarrollado APIs REST con Node.js, Express y TypeScript, utilizando Zod para validaciones, JWT para autenticación, y bcrypt para encriptar información.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
