export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "Python",
    "C",
    "SQL",
    "Cybersecurity",
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-10">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="border rounded-lg p-4 text-center"
            >
              {skill}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}