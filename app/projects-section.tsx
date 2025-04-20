import ProjectCard from "@/components/project-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { mockedProyectsNode, mockedProyectsLaravel } from "./lib/mocks"

export default function ProjectsSection() {
  const nodeProjects = mockedProyectsNode
  const laravelProjects = mockedProyectsLaravel
  const allProjects = [...nodeProjects, ...laravelProjects]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Mis Proyectos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Una colección de mis trabajos en desarrollo web, incluyendo proyectos con TypeScript, React, Next.js,
            Express, Node.js, PHP y Laravel.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full max-w-6xl mx-auto mb-12">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-100/80">
              <TabsTrigger value="all" className="px-6">
                Todos
              </TabsTrigger>
              <TabsTrigger value="node" className="px-6">
                Node/JS
              </TabsTrigger>
              <TabsTrigger value="laravel" className="px-6">
                PHP/Laravel
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="node" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {nodeProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="laravel" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {laravelProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
