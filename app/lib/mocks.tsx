interface MockedProyects {
  name: string
  description: string
  image: string
  technologies: string[]
  technologies_img_url: string[]
  github: string
  demo: string
}
interface MockedImages {
  src: string
  alt: string
}

export const mockedProyectsNode: MockedProyects[] = [
  {
    name: "Api Rest With authentication (Jwt, Cookie)",
    description: "This is a CRUD API Rest with authentication using JWT and Zod for validation.",
    image: "/not-found.webp",
    technologies: ["Node", "Express", "PostgreSQL", "JWT", "Zod"],
    technologies_img_url: ["node-js.svg", "express-js.svg", "postgresql.svg", "jwt.svg", "zod.svg"],
    github: "https://github.com/SantiagoGRJ/api-rest-crud-express-postgresql",
    demo: "#",
  },
  {
    name: "Implementation Frotend with Angular and Backend with Express (MongoDB, Mongo Atlas)",
    description:
      "Application made with angular 17, Back-End with TypeScript, Node JS, Express, is authorized by an access token and search to book with crud operations.",
    image: "/not-found.webp",
    technologies: ["Express", "Angular", "Prisma ORM", "Mongoose", "TypeScript"],
    technologies_img_url: ["express-js.svg", "angular.svg", "prisma.svg", "mongoose.webp", "typescript.svg"],
    github: "https://github.com/SantiagoGRJ/library",
    demo: "#",
  },
  {
    name: "Rick and Morty",
    description:
      "Rick and Morty is a web application that allows users to search for characters,episodes from the series Rick and Morty. this app is made with Angular and TypeScript with mode dark and light.",
    image: "/not-found.webp",
    technologies: ["Angular", "TypeScript"],
    technologies_img_url: ["angular.svg", "typescript.svg"],
    github: "https://github.com/SantiagoGRJ/rick_and_morty",
    demo: "#",
  },
]

export const mockedProyectsLaravel: MockedProyects[] = [
  {
    name: "CineOpinion",
    description:
      "CineOpinion is a web application that allows users to watch, search movies, they can change the language of the movies and about the movies they have seen.",
    image: "/not-found.webp",
    technologies: ["Laravel", "Mysql", "Laravel-Lang", "TMDB", "Tailwindcss"],
    technologies_img_url: ["laravel.svg", "mysql.svg", "", "", "tailwindcss.svg"],
    github: "https://github.com/SantiagoGRJ/cineopinion-proyecto",
    demo: "#",
  },
  {
    name: "Roles and Permissions",
    description: "Implementation of roles and permissions in Laravel using the package Spatie/Laravel-Permission",
    image: "not-found.webp",
    technologies: ["Laravel", "(Spatie) Laravel-Permission", "Mysql", "Tailwindcss"],
    technologies_img_url: ["laravel.svg", "", "mysql.svg", "", "tailwindcss.svg"],
    github: "https://github.com/SantiagoGRJ/Laravel_Roles",
    demo: "#",
  },
  {
    name: "Implementation Livewire in Laravel",
    description:
      "Implementation of Livewire in Laravel with upload images and validation with Livewire, search, filter and pagination",
    image: "/not-found.webp",
    technologies: ["Laravel", "Livewire", "Tailwindcss"],
    technologies_img_url: ["laravel.svg", "livewire.svg", "tailwindcss.svg"],
    github: "https://github.com/SantiagoGRJ/learn-livewire",
    demo: "#",
  },
]

export const mockedImagesFrameworks: MockedImages[] = [
  { src: "/logos/node-js.svg", alt: "NodeJS" },
  { src: "/logos/express-js.svg", alt: "ExpressJS" },
  { src: "/logos/php.svg", alt: "PHP" },
  { src: "/logos/laravel.svg", alt: "Laravel" },
  { src: "/logos/livewire.svg", alt: "Laravel Livewire" },
  { src: "/logos/prisma.svg", alt: "Prisma ORM" },

  { src: "/logos/postgresql.svg", alt: "PostgreSQL" },
  { src: "/logos/mongodb.svg", alt: "MongoDB - Atlas" },
  { src: "/logos/mysql.svg", alt: "MySQL" },
  { src:"/logos/neon.svg",alt:"Neon Serverless Postgres" },

  { src: "/logos/html.svg", alt: "Html" },
  { src: "/logos/css.svg", alt: "Css" },
  { src: "/logos/tailwindcss.svg", alt: "TailwindCSS" },
  { src: "/logos/javascript.svg", alt: "JavaScript" },
  { src: "/logos/typescript.svg", alt: "TypeScript" },
  { src: "/logos/react.svg", alt: "React" },
  { src: "/logos/next-js.svg", alt: "NextJS" },
  { src: "/logos/angular.svg", alt: "Angular" },
  { src: "/logos/vite.svg", alt: "Vite" },

  {src: "/logos/vercel.svg", alt:"Vercel"},
  { src: "/logos/git.svg", alt: "Git" },
  { src: "/logos/github.svg", alt: "GitHub" },
  { src: "/logos/postman.svg", alt: "Postman" },
]

export type { MockedProyects }
