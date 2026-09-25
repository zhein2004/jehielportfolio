import ProjectsSection from "@/components/features/ProjectSection";

const projects = [
  {
    title: "My First React App",
    description: "My first React application built using React and Tailwind CSS.",
    link: "/projects/first-react app",
    image: "/first-react app.png",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio website showcasing my skills and projects.",
    link: "/projects/portfolio-website",
    image: "/portfoliowebsite.png",
  },
  {
    title: "School Projects",
    description: "A collection of projects and activities I created for school.",
    link: "/projects/school-projects",
    image: "/schoolprojects.png",
  },
];

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="mb-10 text-4xl font-bold">
        My Projects
      </h1>

      <ProjectsSection projects={projects} />
    </section>
  );
}