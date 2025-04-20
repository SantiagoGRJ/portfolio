"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react"
import type { MockedProyects } from "@/app/lib/mocks"

interface ProjectCardProps {
  project: MockedProyects
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleDescription = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        <Image
          src={project.image || "/placeholder.svg?height=300&width=300"}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <div className="flex justify-between items-center">
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white hover:text-gray-200 flex items-center bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm"
              >
                <Github size={14} className="mr-1.5" /> Código
              </Link>
              {project.demo && project.demo !== "#" && (
                <Link
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white hover:text-gray-200 flex items-center bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm"
                >
                  Demo <ExternalLink size={14} className="ml-1.5" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-gray-900 line-clamp-2">{project.name}</h3>

        <div className="mb-4">
          <p className={`text-gray-600 text-sm ${isExpanded ? "" : "line-clamp-3"}`}>{project.description}</p>

          {project.description.length > 120 && (
            <button
              onClick={toggleDescription}
              className="mt-1 text-xs flex items-center text-gray-500 hover:text-gray-800 transition-colors"
            >
              {isExpanded ? (
                <>
                  Leer menos <ChevronUp size={14} className="ml-1" />
                </>
              ) : (
                <>
                  Leer más <ChevronDown size={14} className="ml-1" />
                </>
              )}
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2.5 py-1 text-xs bg-gray-100 rounded-full text-gray-700 font-medium"
            >
              {project.technologies_img_url[index] && (
                <span className="w-3 h-3 mr-1 relative">
                  <Image
                    src={`/logos/${project.technologies_img_url[index]}`}
                    alt={tech}
                    fill
                    className="object-contain"
                  />
                </span>
              )}
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
