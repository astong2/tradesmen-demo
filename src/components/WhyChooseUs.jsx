const reasons = [
  "Fully insured and experienced",
  "Fast response across Bristol",
  "Free quotes and honest pricing",
  "Friendly, reliable local service",
];

function WhyChooseUs() {
  return (
    <section id="about" className="section alt-section">
      <div className="section-heading">
        <p className="eyebrow">Trusted by local homeowners</p>
        <h2>Why customers choose us</h2>
      </div>

      <div className="why-grid">
        {reasons.map((reason) => (
          <div key={reason} className="card">
            <p>{reason}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;