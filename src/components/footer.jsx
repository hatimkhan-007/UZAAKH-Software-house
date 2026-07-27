import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>UZAAKH</h2>
          <p>
            Building innovative digital experiences with modern web technologies.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: contact@uzaakh.com</p>
          <p>Phone: +92 300 1234567</p>
          <p>Lahore, Pakistan</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} UZAAKH. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;