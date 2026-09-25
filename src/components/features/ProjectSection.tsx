import { Link } from "react-router";

type Project = {
  title: string;
  description: string;
  link: string;
  image: string;
};

type ProjectSectionProps = {
  projects: Project[];
};

export default function ProjectSection({
  projects,
}: ProjectSectionProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {projects.map((project) => (
        <article
          key={project.title}
          className="overflow-hidden rounded-lg border"
        >
          <img
            src={project.image}
            alt={project.title}
            className="h-48 w-full object-cover"
          />

          <div className="p-6">
            <h2 className="mb-2 text-xl font-bold">
              {project.title}
            </h2>

            <p className="mb-4 text-base">
              {project.description}
            </p>

            <Link
              to={project.link}
className="inline-block rounded-md bg-black px-4 py-2 font-medium text-white transition hover:bg-gray-800"            >
              View Project
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}