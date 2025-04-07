type CardProps = {
  image: string;
  name: string;
  technologies: string[];
  description: string; // Nuevo campo de descripción
  github: string;
  demo: string;
};

function Card({ image, name, technologies, description, github, demo }: CardProps) {
  return (
    <article className="bg-gradient-to-b from-gray-800 to-gray-900 text-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
      {/* Imagen del proyecto */}
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <p className="text-sm font-medium text-white">Haz clic para más detalles</p>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h5 className="text-xl font-bold mb-2">{name}</h5>
        <p className="text-sm text-gray-300 mb-4">
          <span className="font-medium text-gray-100">Tecnologías:</span> {technologies.join(", ")}
        </p>
        <p className="text-sm text-gray-400 mb-4">{description}</p> {/* Descripción del proyecto */}
        <div className="flex justify-between items-center">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-blue-400 hover:text-blue-600 transition-colors"
          >
            Ver código
          </a>
          {demo !== "#" ? (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-green-400 hover:text-green-600 transition-colors"
            >
              Ver demo
            </a>
          ) : (
            <p className="text-sm font-medium text-green-400 hover:text-green-600 transition-colors">
              Próximamente...
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

export default Card;


