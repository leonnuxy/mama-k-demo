import { useState } from 'react';
import styles from '../styles/Header.module.css';
import mamaKLogo from '../assets/mama-k-logo-2.png'; // Import the logo

export default function Header({ cartItems, toggleCart }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const navLinks = [
    { label: "Home", href: "#home", icon: "fas fa-home" },
    { label: "Menu", href: "#menu", icon: "fas fa-utensils" },
    { label: "How It Works", href: "#how-it-works", icon: "fas fa-info-circle" },
    { label: "Testimonials", href: "#testimonials", icon: "fas fa-star" },
  ];

  return (
    <header className={styles.headerBase}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <img src={mamaKLogo} alt="Mama K's Kitchen Logo" className={styles.logoImage} />
          </div>
          <h1 className={styles.brandName}>
            Mama K's <span className={styles.brandHighlight}>Kitchen</span>
          </h1>
        </div>

        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.navLink}
            >
              <i className={`${link.icon} ${styles.navLinkIcon}`}></i>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.controlsContainer}>
          <button 
            onClick={toggleCart}
            className={`${styles.cartButton} ${styles.navLink}`}
            aria-label="Cart"
          >
            <i className={`fas fa-shopping-cart ${styles.cartIcon}`}></i>
            {itemCount > 0 && (
              <span className={styles.cartBadge}>
                {itemCount}
              </span>
            )}
          </button>
          
          <button 
            className={`${styles.mobileMenuButton} ${styles.navLink}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className={`${styles.mobileMenu} md:hidden`}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.mobileMenuItem}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <i className={`${link.icon} ${styles.navLinkIcon}`}></i>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
