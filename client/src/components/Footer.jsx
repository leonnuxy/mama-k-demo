/* Footer.jsx */
import React from 'react';
import styles from '../styles/Footer.module.css';
import mamaKLogo from '../assets/mama-k-logo-2.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          {/* Brand Info */}
          <div className={styles.brandInfoContainer}>
            <div className={styles.brandNameContainer}>
              <img src={mamaKLogo} alt="Mama K's Kitchen" className={styles.logoImage} />
              <h3 className={styles.brandName}>
                Mama K's <span className={styles.brandHighlight}>Kitchen</span>
              </h3>
            </div>
            <p className={styles.brandDescription}>
              Bringing authentic Nigerian cuisine to your doorstep, made with love and tradition. Experience the rich flavors of West Africa with our carefully crafted dishes.
            </p>
            <div className={styles.socialLinksContainer}>
              {['facebook-f','instagram','twitter','linkedin-in'].map(icon => (
                <a key={icon} href="#" className={styles.socialLink} aria-label={icon}>
                  <i className={`fab fa-${icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Us */}
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
                <span className={styles.contactText}>Sun-Mon: 9AM-9PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <p className={styles.copyrightText}>
            © {currentYear} Mama K's Kitchen. All rights reserved.
          </p>
          <p className={styles.designCredit}>
            Designed with <i className={`fas fa-heart ${styles.heartIcon}`}></i> by <span className={styles.designerName}>Noel</span>
          </p>
          <div className={styles.legalLinksContainer}>
            <a href="#" className={styles.legalLink}>Privacy Policy</a>
            <a href="#" className={styles.legalLink}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}