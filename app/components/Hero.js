export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6"
    >
      <p className="text-lg text-gray-500 mb-4">
        Hello, I'm
      </p>

      <h1 className="text-5xl md:text-7xl font-bold mb-4">
        Chirag Deswal
      </h1>

      <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
        B.Tech CSE Student 
      </h2>

      <p className="max-w-2xl text-gray-500 mb-8">
        I’m a Computer Science student passionate about web development,
        programming, and cybersecurity. I enjoy building projects and
        learning new technologies.
      </p>

      <div className="flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}