export default function ContactSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
  <div>
        <h1 className="text-3xl font-bold mb-5">
          Contact Me
        </h1>

        <p className="text-base leading-relaxed mb-8">
          Have a question, project idea, or just want to say hello?
          Feel free to get in touch with me!
        </p>

<div className="grid gap-6 md:grid-cols-3">
    <div className="rounded-lg border p-6">
            <h2 className="text-lg font-bold">Email</h2>
            <p className="text-base">jehielgenelosa@gmail.com</p>
          </div>

          <div className="rounded-lg border p-6">
            <h2 className="text-lg font-bold">Phone</h2>
            <p className="text-base">+63 915 123 4567</p>
          </div>

          <div className="rounded-lg border p-6">
            <h2 className="text-lg font-bold">Location</h2>
            <p className="text-base">Cebu, Philippines</p>
          </div>
        </div>
      </div>
    </section>
  );
}