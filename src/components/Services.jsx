const services = [
  {
    title: "Emergency Plumbing",
    text: "Fast help for urgent leaks, burst pipes, and unexpected plumbing issues.",
  },
  {
    title: "Leak Repairs",
    text: "Quick diagnosis and reliable fixes for taps, pipes, and hidden leaks.",
  },
  {
    title: "Bathroom Installations",
    text: "Clean, professional fitting for bathrooms, showers, sinks, and toilets.",
  },
  {
    title: "Boiler Servicing",
    text: "Routine servicing and plumbing support to keep systems running smoothly.",
  },
];

function Services() {
  return (
    <section id="services" className="section">
      <div className="section-heading">
        <p className="eyebrow">Services</p>
        <h2>What we do</h2>
      </div>

      <div className="card-grid">
        {services.map((service) => (
          <article key={service.title} className="card">
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
