export default function ServicesSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
  <div>
        <h1 className="text-3xl font-bold mb-5">
          My Services
        </h1>

        <p className="text-base leading-relaxed mb-8">
          Here are some of the services and skills I can offer
          through my knowledge and experience in Information Technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2">
              Web Development
            </h2>

            <p className="text-base">
              Creating responsive and user-friendly websites using
              modern web technologies.
            </p>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2">
              UI Design
            </h2>

            <p className="text-base">
              Designing simple, clean, and visually appealing
              interfaces for websites and applications.
            </p>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2">
              Programming
            </h2>

            <p className="text-base">
              Developing programs and applications while continuously
              improving my programming skills.
            </p>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2">
              Photo & Video Editing
            </h2>

            <p className="text-base">
              Editing photos and videos for creative and digital
              projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}