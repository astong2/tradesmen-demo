const testimonials = [
  {
    name: "Sarah, Bedminster",
    text: "Quick response and great service. The job was done neatly and at a fair price.",
  },
  {
    name: "David R, Clifton",
    text: "Really professional from start to finish. Would definitely use again.",
  },
  {
    name: "Priya, BS5",
    text: "Fixed the issue fast and explained everything clearly. Highly recommended.",
  },
  {
    name: "Michael, Filton",
    text: "Prompt and efficient service. Very satisfied with the outcome. No hidden costs, just honest work.",
  }
];

function Testimonials() {
  return (
    <section className="section">
      <div className="section-heading">
        <p className="eyebrow">Reviews</p>
        <h2>What customers say</h2>
      </div>

      <div className="card-grid">
        {testimonials.map((review) => (
          <article key={review.name} className="card">
            <p>"{review.text}"</p>
            <strong>{review.name}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
