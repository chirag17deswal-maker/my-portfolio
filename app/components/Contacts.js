export default function Contacts() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-10">
          Contact Me
        </h2>

        <div className="max-w-xl mx-auto text-center">

          <p className="text-gray-600 mb-8">
            If you want to get in touch with me, feel free to contact me.
          </p>

          <div className="space-y-4">
           <p>
  <strong>Email:</strong>{" "}
  <a href="mailto:chirag17deswal@gmail.com">
    chirag17deswal@gmail.com
  </a>
</p>

<p>
  <strong>GitHub:</strong>{" "}
  <a
    href="https://github.com/chirag17deswal"
    target="_blank"
    rel="noopener noreferrer"
  >
    github.com/chirag17deswal
  </a>
</p>

<p>
  <strong>LinkedIn:</strong>{" "}
  <a
    href="https://www.linkedin.com/in/chirag-deswal"
    target="_blank"
    rel="noopener noreferrer"
  >
    linkedin.com/in/Chirag Deswal
  </a>
</p>
           
            
          </div>

        </div>

      </div>
    </section>
  );
}