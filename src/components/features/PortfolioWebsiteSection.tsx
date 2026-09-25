function PortfolioWebsitePage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-4xl font-bold">
        Portfolio Website
      </h1>

      <p className="mt-4 text-lg">
        Welcome to my Portfolio Website project! This website was created
        to showcase my skills, projects, and experience as an IT student.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">

        {/* About the Project */}
        <div className="rounded-xl border border-black p-6">
          <h2 className="text-2xl font-bold">
            About the Project
          </h2>

          <p className="mt-3">
            This portfolio website is designed to introduce myself and
            present the projects I have created while learning web
            development. It includes different sections such as Home,
            About, Projects, and Contact.
          </p>
        </div>

        {/* Technologies Used */}
        <div className="rounded-xl border border-black p-6">
          <h2 className="text-2xl font-bold">
            Technologies Used
          </h2>

          <ul className="mt-3 list-disc pl-5">
            <li>React</li>
            <li>TypeScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>React Router</li>
          </ul>
        </div>

        {/* Features */}
        <div className="rounded-xl border border-black p-6">
          <h2 className="text-2xl font-bold">
            Features
          </h2>

          <ul className="mt-3 list-disc pl-5">
            <li>Responsive design</li>
            <li>Interactive navigation</li>
            <li>Project showcase</li>
            <li>About Me section</li>
            <li>Contact section</li>
          </ul>
        </div>

        {/* Project Goal */}
        <div className="rounded-xl border border-black p-6">
          <h2 className="text-2xl font-bold">
            Project Goal
          </h2>

          <p className="mt-3">
            The goal of this project is to create a personal website where
            I can showcase my skills, projects, and progress as I continue
            learning web development.
          </p>
        </div>

      </div>
    </section>
  );
}

export default PortfolioWebsitePage;