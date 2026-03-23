const images = [
  
  
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1620653713380-7a34b773fef8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGx1bWJpbmd8ZW58MHx8MHx8fDI%3D",
  "https://adoptostaging.blob.core.windows.net/media/plumber-job-description-template-tQh1-P.jpg",
  "https://images.unsplash.com/photo-1676210134188-4c05dd172f89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGx1bWJpbmd8ZW58MHx8MHx8fDI%3D",
];

function Gallery() {
  return (
    <section className="section alt-section">
      <div className="section-heading">
        <p className="eyebrow">Past work</p>
        <h2>Recent projects</h2>
      </div>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <img key={index} src={image} alt="Recent images from our plumbing jobs. We are proud of our work and the results we deliver for our clients. If you're looking for a reliable plumber, you've come to the right place." />
        ))}
      </div>
    </section>
  );
}

export default Gallery;