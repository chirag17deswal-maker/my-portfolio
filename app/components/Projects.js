export default function Projects() {
  const projects = [
    {
      name: "College ERP Portal",
      description:
        "A web portal for managing student information and college-related activities.",
    },
    {
      name: "Face Recognition",
      description:
        "A Python-based project that uses computer vision for face recognition.",
    },
    {
      name: "Bowling Action Detection",
      description:
        "A computer vision project that analyzes bowling action using pose detection.",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="border rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-3">
                {project.name}
              </h3>

              <p className="text-gray-600 mb-5">
                {project.description}
              </p>

              <a
                href="#"
                className="text-blue-600 hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}