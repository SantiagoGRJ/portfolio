import Image from "next/image";

type CardProps = {
  image: string;
  name: string;
  technologies: string[];
  technologies_img_url: string[];
  description: string;
  github: string;
  demo: string;
};

function Card({ image, name, technologies, technologies_img_url, description, github, demo }: CardProps) {
  return (
    <article className="flex flex-col md:flex-row bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
      {/* Imagen del proyecto */}
      <div className="relative w-full md:w-1/3">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-48 md:h-full"
        />
      </div>

      {/* Contenido */}
      <div className="p-6 flex flex-col justify-between w-full md:w-2/3">
        <div>
          <h5 className="text-xl font-medium mb-2">{name}</h5>
          <p className="text-sm text-gray-300 mb-4">
            <span className="font-medium text-gray-100">Tecnologías:</span>{" "}
            {technologies_img_url.map((tech, index) => (
              <Image
                key={index}
                src={`logos/${tech}`}
                alt={technologies[index]}
                width={24}
                height={24}
                className="inline-block w-6 h-6 mr-1"
              />
            ))}
            {technologies.join(", ")}
          </p>
          <p className="text-sm font-mono text-gray-400 mb-4">{description}</p>
        </div>
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
            <p className="text-sm font-medium text-gray-400">Próximamente...</p>
          )}
        </div>
      </div>
    </article>
  );
}

export default Card;

