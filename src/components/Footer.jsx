import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-logo-col">
            <div className="footer-brand">Durbar Restro</div>
            <span className="footer-tagline">Restaurant &amp; Bar</span>
            <p>Where great food, warm hospitality, and unforgettable experiences come together. Join us and feel the Durbar difference.</p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">f</a>
              <a href="#" className="social-link" aria-label="Instagram">📷</a>
              <a href="#" className="social-link" aria-label="WhatsApp">💬</a>
              <a href="#" className="social-link" aria-label="YouTube">▶</a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/menu">Our Menu</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/contact">Reservation</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Opening Hours</h4>
            <ul>
              <li><span className="day">Sun – Thu</span><br /><span className="hours-time">10:00 AM – 10:00 PM</span></li>
              <li><span className="day">Fri – Sat</span><br /><span className="hours-time">10:00 AM – 12:00 AM</span></li>
              <li><span className="day">Public Holidays</span><br /><span className="hours-time">11:00 AM – 11:00 PM</span></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact Us</h4>
            <div className="footer-contact-item"><span>📍</span><span>Birtamode-4, Laxman Market, Jhapa, Nepal</span></div>
            <div className="footer-contact-item"><span>📞</span><a href="tel:+9779709051665">+977-9709051665</a></div>
            <div className="footer-contact-item"><span>✉️</span><a href="mailto:durbarrestro17@gmail.com">durbarrestro17@gmail.com</a></div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2024 Durbar Restro. All rights reserved.</span>
          <span>Made with ❤️ in Birtamode, Nepal</span>
        </div>
      </div>
    </footer>
  )
}
