

interface MockedProyects {
    name: string;
    description: string;
    image: string;
    tecnologies: string[];
    github: string;
    demo: string;
}

export const mockedProyectsNode: MockedProyects[] = [
    {
        name: 'Api Rest With authentication (Jwt, Cookie)',
        description: 'This is a CRUD API Rest with authentication using JWT and Zod for validation.',
        image: '/not-found.jpeg',
        tecnologies: ['Node', 'Express', 'PostgreSQL', 'JWT', 'Zod'],
        github: 'https://github.com/SantiagoGRJ/api-rest-crud-express-postgresql',
        demo: '#'
    },
    {
        name: 'Implementation Frotend with Angular and Backend with Express (MongoDB, Mongo Atlas)',
        description: 'Application made with angular 17, Back-End with TypeScript, Node JS, Express, Prisma Orm, Jsonwebtoken, is authorized by an access token and search to book with crud operations.',
        image: '/not-found.jpeg',
        tecnologies: ['Express', 'Angular', 'Prisma ORM', 'Mongoose', 'TypeScript'],
        github: 'https://github.com/SantiagoGRJ/library/tree/master',
        demo: '#'
    },
    {
        name: 'Rick and Morty',
        description: 'Rick and Morty is a web application that allows users to search for characters,episodes from the series Rick and Morty. this app is made with Angular and TypeScript with mode dark and light.',
        image: '/not-found.jpeg',
        tecnologies: ['Angular', 'TypeScript'],
        github: 'https://github.com/SantiagoGRJ/rick_and_morty',
        demo: '#'
    }
]

export const mockedProyectsLaravel: MockedProyects[] = [
    {
        name: 'CineOpinion',
        description: 'CineOpinion is a web application that allows users to watch, search movies, they can change the language of the movies and about the movies they have seen.',
        image: '/not-found.jpeg',
        tecnologies: ['Laravel', 'Laravel-Lang', 'TMDB', 'Tailwindcss'],
        github:'https://github.com/SantiagoGRJ/cineopinion-proyecto',
        demo: '#'

    },
    {
        name: 'Roles and Permissions',
        description: 'Implementation of roles and permissions in Laravel using the package Spatie/Laravel-Permission',
        image: 'not-found.jpeg',
        tecnologies: ['Laravel', 'Laravel-Permission', 'Mysql', 'Tailwindcss'],
        github: 'https://github.com/SantiagoGRJ/Laravel_Roles',
        demo: '#'
    },
    {
        name: 'Implementation Livewire in Laravel',
        description: 'Implementation of Livewire in Laravel with upload images and validation with Livewire, search, filter and pagination',
        image: '/not-found.jpeg',
        tecnologies: ['Laravel', 'Livewire', 'Tailwindcss'],
        github: 'https://github.com/SantiagoGRJ/learn-livewire',
        demo: '#'
    }
    
]

