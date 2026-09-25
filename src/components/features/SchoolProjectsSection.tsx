function SchoolProjectsPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-4xl font-bold">
        School Projects
      </h1>

      <p className="mt-4 text-lg">
        This page showcases some of the projects and activities I have
        completed as an Information Technology student.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">

        {/* Statistics Project */}
        <div className="rounded-xl border border-black p-6">
          <h2 className="text-2xl font-bold">
            Social Science Statistics
          </h2>

          <p className="mt-3">
            A school project focused on applying statistical methods and
            techniques to analyze data and present meaningful results.
          </p>

          <p className="mt-3 font-semibold">
            Topics:
          </p>

          <ul className="mt-2 list-disc pl-5">
            <li>Pearson Correlation</li>
            <li>Simple Linear Regression</li>
            <li>Chi-Square Test</li>
            <li>Paired T-Test</li>
          </ul>
        </div>

        {/* Student Organization Research */}
        <div className="rounded-xl border border-black p-6">
          <h2 className="text-2xl font-bold">
            Student Organization Research
          </h2>

          <p className="mt-3">
            A quantitative research project about student organizations
            at Cordova Public College. The project involved collecting,
            organizing, and analyzing membership data.
          </p>

          <p className="mt-3 font-semibold">
            Methods Used:
          </p>

          <ul className="mt-2 list-disc pl-5">
            <li>Data Collection</li>
            <li>Data Organization</li>
            <li>Bar Graphs</li>
            <li>Data Interpretation</li>
          </ul>
        </div>

        {/* React Projects */}
        <div className="rounded-xl border border-black p-6">
          <h2 className="text-2xl font-bold">
            React Projects
          </h2>

          <p className="mt-3">
            Projects created while learning React and TypeScript,
            including reusable components, routing, cards, buttons,
            and responsive layouts.
          </p>

          <p className="mt-3 font-semibold">
            Technologies:
          </p>

          <ul className="mt-2 list-disc pl-5">
            <li>React</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>React Router</li>
          </ul>
        </div>

        {/* Figma Projects */}
        <div className="rounded-xl border border-black p-6">
          <h2 className="text-2xl font-bold">
            Figma Projects
          </h2>

          <p className="mt-3">
            Design projects created using Figma as part of our school
            activities. These projects helped me learn about user interface
            design, prototyping, layout, and creating user-friendly
            digital interfaces.
          </p>

          <p className="mt-3 font-semibold">
            Skills Used:
          </p>

          <ul className="mt-2 list-disc pl-5">
            <li>UI Design</li>
            <li>Wireframing</li>
            <li>Prototyping</li>
            <li>Layout Design</li>
            <li>User Interface Design</li>
          </ul>
        </div>

        {/* Other School Activities */}
        <div className="rounded-xl border border-black p-6">
          <h2 className="text-2xl font-bold">
            Other School Activities
          </h2>

          <p className="mt-3">
            Various school activities and projects that helped me improve
            my communication, teamwork, problem-solving, research, and
            technical skills.
          </p>

          <ul className="mt-3 list-disc pl-5">
            <li>Group Research</li>
            <li>Presentations</li>
            <li>Data Analysis</li>
            <li>Programming Activities</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default SchoolProjectsPage