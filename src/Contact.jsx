import './App.css'

function Contact() {
  return (
    <div className="page">
      <div className="container">
        <h2>Contact Us</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p><strong>Address:</strong> 123 Premier Way, Football City, FC 12345</p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            <p><strong>Email:</strong> info@premierfc.com</p>
            <p><strong>Stadium:</strong> Premier Stadium, Capacity: 50,000</p>
            
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="https://twitter.com/PremierFC" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://facebook.com/PremierFC" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://instagram.com/PremierFC" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://youtube.com/PremierFC" target="_blank" rel="noopener noreferrer">YouTube</a>
            </div>
          </div>
          
          <div className="contact-form">
            <h3>Send us a Message</h3>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject:</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact