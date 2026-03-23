function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-heading">
        <p className="eyebrow">Contact</p>
        <h2>Get a free quote today</h2>
        <p>We aim to respond within 1-2 hours of your enquiry.</p>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Your name" />
        <input type="tel" placeholder="Phone number" />
        <input type="email" placeholder="Email address" />
        <textarea placeholder="Tell us what you need" rows="5"></textarea>
        <button type="submit" className="btn btn-primary">
          Send enquiry
        </button>
      </form>
    </section>
  );
}

export default Contact;
