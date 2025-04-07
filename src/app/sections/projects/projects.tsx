import { mockedProyectsLaravel, mockedProyectsNode } from "lib/mocks";
import Card from "ui/projects/Card";

type Props = {};

function Projects({}: Props) {
  return (
    <section
      id="projects"
      className="flex flex-col items-center py-12 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900 text-white"
    >
      <h3 className="text-3xl font-bold text-white mb-8">Proyectos Web</h3>

      {/* Ecosistema TypeScript */}
      <h4 className="text-2xl font-semibold text-gray-300 mb-6">
        Ecosistema TypeScript (Next.js, Express, Node.js)
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full px-4">
        {mockedProyectsNode.map((project) => (
          <Card
            key={project.name}
            image={project.image}
            name={project.name}
            technologies={project.tecnologies}
            description={project.description}	
            github={project.github}
            demo={project.demo}
          />
        ))}
      </div>

      {/* Ecosistema PHP/Laravel */}
      <h4 className="text-2xl font-semibold text-gray-300 mt-12 mb-6">
        Ecosistema PHP (Laravel, PHP)
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full px-4">
        {mockedProyectsLaravel.map((project) => (
          <Card
            key={project.name}
            image={project.image}
            name={project.name}
            technologies={project.tecnologies}
            description={project.description}
            github={project.github}
            demo={project.demo}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;