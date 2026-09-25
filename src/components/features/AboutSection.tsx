export default function AboutSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
  <div>
        <h1 className="text-3xl font-bold mb-5">
          About Me
        </h1>

        <p className="text-base leading-relaxed mb-4">
          Hi! I'm Jehiel E. Genelosa, a Bachelor of Science
          in Information Technology student who is passionate about
          technology, web development, and creating digital projects.
        </p>

        <p className="text-base leading-relaxed mb-4">
          I enjoy learning new programming languages and improving
          my skills in designing and developing websites and
          applications.
        </p>

        <p className="text-base leading-relaxed">
          As an IT student, I'm continuously learning and exploring
          different areas of technology. My goal is to create
          useful, creative, and user-friendly digital experiences.
        </p>

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-3">
            What I Do
          </h2>

          <ul className="list-disc list-inside text-base space-y-1">
            <li>Web Development</li>
            <li>UI Design</li>
            <li>Programming</li>
            <li>Creative Digital Projects</li>
          </ul>
        </div>
      </div>
    </section>
  );
}