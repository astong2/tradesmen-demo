function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-heading">
        <p className="eyebrow">Request a Quote</p>
        <h2>Tell us what work you need done</h2>
        <p className="section-intro">
          Fill in a few details below and we’ll get back to you with a quote.
        </p>

        <p className="quote-note">
          Upload photos if helpful for a faster, more accurate quote.
        </p>
      </div>

      <form className="quote-form">
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="name">Full Name</label>
            <input id="name" type="text" placeholder="Your name" />
          </div>

          <div className="form-field">
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" type="tel" placeholder="Your phone number" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-field">
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" placeholder="Your email address" />
          </div>

          <div className="form-field">
            <label htmlFor="jobType">Job Type</label>
            <select id="jobType" defaultValue="">
              <option value="" disabled>
                Select a service
              </option>
              <option>Emergency Repair</option>
              <option>General Plumbing</option>
              <option>Bathroom Installation</option>
              <option>Boiler / Heating Work</option>
              <option>Leak Repair</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="description">Description of Work</label>
          <textarea
            id="description"
            rows="5"
            placeholder="Tell us what work you need done..."
          ></textarea>
        </div>

        <div className="form-row">
          <div className="form-field">
            <label htmlFor="budget">Estimated Budget</label>
            <input id="budget" type="text" placeholder="e.g. £200 - £500" />
          </div>

          <div className="form-field">
            <label htmlFor="photos">Upload Photos</label>
            <input id="photos" type="file" multiple />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Request Quote
        </button>
      </form>
    </section>
  );
}

export default Contact;