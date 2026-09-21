export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-10">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Who I Am
            </h3>

            <p className="text-gray-600 leading-7">
              I'm Chirag Deswal, a B.Tech Computer Science student
              interested in frontend development, programming, and
              cybersecurity. I enjoy creating websites, building
              projects, and learning new technologies.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              My Goal
            </h3>

            <p className="text-gray-600 leading-7">
              My goal is to become a skilled software developer while
              developing strong cybersecurity skills and working on
              real-world projects.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}