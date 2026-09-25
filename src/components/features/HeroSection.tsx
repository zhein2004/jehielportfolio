import { NavLink } from "react-router";

export default function HeroSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex flex-col items-center gap-10 text-center md:flex-row md:text-left">
        {/* Profile Picture */}
        <div className="shrink-0">
          <img
            src="/profile.jpg"
            alt="Jehiel Genelosa"
            className="h-48 w-48 rounded-full object-cover"
          />
        </div>

        {/* Introduction */}
        <div className="max-w-xl">
          <p className="mb-3 text-sm font-medium text-gray-600">
            Hello, I'm
          </p>

          <h1 className="text-4xl font-bold">
            Jehiel E. Genelosa
          </h1>

          <p className="mt-4 text-gray-600">
            A student and aspiring web developer passionate about creating
            clean, responsive, and user-friendly websites.
          </p>

          <NavLink
            to="/projects"
            className="mt-8 inline-flex w-fit items-center justify-center rounded-lg bg-black px-6 py-3 font-semibold text-white transition hover:bg-gray-800 active:scale-95"
          >
            View My Projects
          </NavLink>
              </div>
  
      </div>
    </section>
  );
}