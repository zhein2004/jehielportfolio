export default function FirstReactAppSection() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-4xl font-bold">
        My First React App
      </h1>

      <p className="mt-4 text-lg text-gray-600">
        My first React project using Vite, TypeScript, and Tailwind CSS.
      </p>

      <div className="mt-6 rounded-xl border border-black p-6">
        <h2 className="text-2xl font-bold">
          About This Project
        </h2>

        <p className="mt-3">
          This is one of my first projects while learning React,
          TypeScript, and Tailwind CSS.
        </p>
      </div>

      <div className="mt-6 rounded-xl border border-black p-6">
        <h2 className="text-2xl font-bold">
          Technologies Used
        </h2>

        <ul className="mt-3 list-disc pl-6">
          <li>React</li>
          <li>TypeScript</li>
          <li>Vite</li>
          <li>Tailwind CSS</li>
        </ul>
      </div>
    </section>
  );
}