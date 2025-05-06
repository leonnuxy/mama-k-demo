import styles from '../styles/Footer.module.css';
import mamaKLogo from '../assets/mama-k-logo-2.png'; // Import the logo

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Decorative elements */}
      <div className={styles.patternDecoration1}></div>
      <div className={styles.patternDecoration2}></div>
      <div className={styles.patternDecoration3}></div>
      
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          {/* Brand & Description */}
          <div className={styles.brandInfoContainer}>
            <div className={styles.brandNameContainer}>
              <div className={styles.logoIcon}>
                <img src={mamaKLogo} alt="Mama K's Kitchen Logo" className={styles.logoImage} />
              </div>
              <h3 className={styles.brandName}>
                Mama K's <span className={styles.brandHighlight}>Kitchen</span>
              </h3>
            </div>
            <p className={styles.brandDescription}>
              Authentic Nigerian cuisine delivered to your doorstep. Made with love, traditional recipes, and the freshest ingredients.
            </p>
            <div className={styles.socialLinksContainer}>
              <a href="https://www.facebook.com/mamakayss/" className={styles.socialLink} aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/mamakayss/" className={styles.socialLink} aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Pinterest">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className={styles.footerLinksSection}>
            <h4 className={styles.footerSectionTitle}>Quick Links</h4>
            <ul className={styles.linksList}>
              {["Home", "Menu", "How It Works", "About Us", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} 
                    className={styles.footerLink}
                  >
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className={styles.footerLinksSection}>
            <h4 className={styles.footerSectionTitle}>Contact Us</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactListItem}>
                <i className={`fas fa-map-marker-alt ${styles.contactIcon}`}></i>
                <span className={styles.contactText}>4133 4 St NW Calgary, AB, Canada, Alberta T2K 1A3</span>
              </li>
              <li className={styles.contactListItem}>
                <i className={`fas fa-phone-alt ${styles.contactIcon}`}></i>
                <span className={styles.contactText}>(403) 992-6479</span>
              </li>
              <li className={styles.contactListItem}>
                <i className={`fas fa-envelope ${styles.contactIcon}`}></i>
                <span className={styles.contactText}>mamakskitchen15@gmail.com</span>
              </li>
              <li className={styles.contactListItem}>
                <i className={`fas fa-clock ${styles.contactIcon}`}></i>
                <span className={styles.contactText}>Sun-Sat: 9:00 AM - 9:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <div className={styles.copyrightContainer}>
            <p className={styles.copyrightText}>{new Date().getFullYear()} Mama K's Kitchen. All rights reserved.</p>
            <p className={styles.designCredit}>Designed with <span className={styles.heartIcon}>❤️</span> by <span className={styles.designerName}>Noel Ugwoke</span></p>
          </div>
          <div className={styles.legalLinksContainer}>
            <a href="#" className={styles.legalLink}>Privacy Policy</a>
            <a href="#" className={styles.legalLink}>Terms of Service</a>
            <a href="#" className={styles.legalLink}>FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
