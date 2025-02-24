import Head from 'next/head';
import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      name: "Landing Page - SoluTech",
      description: "The SoluTech project is a modern and responsive landing page designed to showcase the services of a fictional technology solutions company. The page was planned and implemented with a focus on an attractive design, intuitive navigation, and optimized performance, providing a pleasant and efficient user experience.",
      link: "https://github.com/KauaZao0o/SoluTech"
    },
    {
      name: "Calculator in different programming languages",
      description: "The goal is to develop a fully functional and responsive calculator with an intuitive interface, featuring advanced capabilities such as percentage calculations, factorials, inverse operations, and history management. This project aims to explore various technologies and frameworks for implementing both the graphical interface and mathematical logic.",
      link: "https://github.com/KauaZao0o/Calculator"
    },
    {
      name: "E-Commerce - Motors-Commerce",
      description: "The Motors-Commerce project is a clean and modern e-commerce platform for vehicle sales, built with only HTML and CSS to ensure a lightweight and optimized user experience. It focuses on an intuitive interface, responsive design, and well-structured content presentation.",
      link: "https://github.com/KauaZao0o/Motors-Commerce"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#111821] text-[#575757]">
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>

      <header className="p-4">
        <h1 className="text-5xl font-bold text-center text-white uppercase tracking-wider animate-glitch">
          Projects
        </h1>
      </header>

      <main className="flex-1 p-10">
        <section id="projects" className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="project-card p-6 bg-[#1c2a36] rounded-md shadow-lg">
              <h2 className="text-xl font-semibold text-white">{project.name}</h2>
              <p className="text-gray-300 mt-2">{project.description}</p>
              <Link href={project.link} className="text-[#21b621] hover:text-white mt-4 inline-block">
                View project
              </Link>
            </div>
          ))}
        </section>
      </main>

      <footer className="p-4 text-center">
        <Link href="/" className="text-white hover:text-[#21b621]">
          KauaZao0o &copy; 2024 - 2025
        </Link>
      </footer>
    </div>
  );
}
