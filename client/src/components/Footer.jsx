import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          {/* Brand & Description */}
          <div className={styles.brandInfoContainer}>
            <div className={styles.brandNameContainer}>
              <div className={styles.brandLogoPlaceholder}>
                MK
              </div>
              <h3 className={styles.brandName}>
                Mama K's <span className={styles.brandHighlight}>Kitchen</span>
              </h3>
            </div>
            <p className={styles.brandDescription}>
              Authentic West African cuisine delivered to your doorstep. Made with love, traditional recipes, and the freshest ingredients.
            </p>
            <div className={styles.socialLinksContainer}>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                <i className="fab fa-twitter"></i>
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
                    {item}
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
                <span className={styles.contactText}>123 Main Street<br />Atlanta, GA 30303</span>
              </li>
              <li className={styles.contactListItem}>
                <i className={`fas fa-phone-alt ${styles.contactIcon}`}></i>
                <span className={styles.contactText}>(404) 555-7890</span>
              </li>
              <li className={styles.contactListItem}>
                <i className={`fas fa-envelope ${styles.contactIcon}`}></i>
                <span className={styles.contactText}>hello@mamakskitchen.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p className={styles.copyrightText}>&copy; {new Date().getFullYear()} Mama K's Kitchen. All rights reserved.</p>
          <div className={styles.legalLinksContainer}>
            <a href="#" className={styles.legalLink}>Privacy Policy</a>
            <a href="#" className={styles.legalLink}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
