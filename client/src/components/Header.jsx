import { useState, useEffect } from 'react';
import styles from '../styles/Header.module.css';
import mamaKLogo from '../assets/mama-k-logo-2.png';
import { combineClasses } from '../utils/styleUtils';

export default function Header({ cartItemCount, toggleCart }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home", icon: "fas fa-home" },
    { label: "Menu", href: "#menu", icon: "fas fa-utensils" },
    { label: "How It Works", href: "#how-it-works", icon: "fas fa-info-circle" },
    { label: "Testimonials", href: "#testimonials", icon: "fas fa-star" },
  ];

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    
    const handleClickOutside = (event) => {
      if (event.target.closest(`.${styles.mobileMenu}`) || 
          event.target.closest(`.${styles.mobileMenuButton}`)) {
        return;
      }
      setIsMobileMenuOpen(false);
    };

    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={combineClasses(
      styles.headerBase,
      isScrolled && styles.headerScrolled
    )}>
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
            {cartItemCount > 0 && (
              <span className={styles.cartBadge}>
                {cartItemCount}
              </span>
            )}
          </button>
          
          <button 
            className={combineClasses(
              styles.mobileMenuButton, 
              styles.navLink,
              isMobileMenuOpen && styles.active
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>
      
      <div className={combineClasses(
        styles.mobileMenu,
        isMobileMenuOpen && styles.mobileMenuOpen
      )}>
        <nav className={styles.mobileNav}>
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
        </nav>
      </div>
    </header>
  );
}
