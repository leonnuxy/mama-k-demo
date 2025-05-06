import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.backgroundImageContainer}></div>
      
      <div className={styles.contentContainer}>
        <div className={styles.textContentWrapper}>
          <h1 className={styles.title}>
            Experience Authentic <span className={styles.nigerianFlagText}>Nigerian</span> Cuisine
          </h1>
          <p className={styles.subtitle}>
            Delicious homemade meals for your delight.
          </p>
          <div className={styles.buttonGroup}>
            <a 
              href="#menu" 
              className={styles.ctaButton}
            >
              Order Now
            </a>
            <a 
              href="#how-it-works" 
              className={styles.ctaButtonSecondary}
            >
              How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
