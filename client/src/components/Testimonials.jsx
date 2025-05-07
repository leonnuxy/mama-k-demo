// Testimonials.jsx (refactored)
import React from 'react';
import Slider from 'react-slick';
import styles from '../styles/Testimonials.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// ——— Testimonial Data ———
const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Regular Customer",
    quote: "The jollof rice is incredible! Perfectly spiced and the portion sizes are generous. This is the closest thing to my grandmother's cooking I've found.",
    avatar: "https://randomuser.me/api/portraits/women/23.jpg",
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Food Blogger",
    quote: "I was blown away by the authenticity of the flavors. The egusi soup took me right back to my trip to Nigeria. Highly recommend!",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
  },
  {
    id: 3,
    name: "Amara Okafor",
    role: "First-time Customer",
    quote: "Fast delivery, great packaging, and most importantly - delicious food! The suya skewers were perfectly seasoned and the puff puff was amazing!",
    avatar: "https://randomuser.me/api/portraits/women/85.jpg",
  }
];

// ——— Carousel Settings ———
const SLIDER_SETTINGS = {
  dots: true,
  infinite: true,
  speed: 400,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768,  settings: { slidesToShow: 1 } }
  ]
};

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.testimonialsSection}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>What Our Customers Say</h2>
          <p className={styles.sectionSubtitle}>
            Don't just take our word for it – hear from our satisfied customers about their experiences with Mama K's Kitchen.
          </p>
        </div>

        {/* Mobile/Tablet Carousel */}
        <div className={styles.sliderWrapper}>
          <Slider {...SLIDER_SETTINGS} className={styles.slider}>
            {TESTIMONIALS.map(t => (
              <div key={t.id} className={styles.slide}>
                <div className={styles.testimonialCard}>
                  <header className={styles.cardHeader}>
                    <img src={t.avatar} alt={t.name} className={styles.avatar} />
                    <div>
                      <h4 className={styles.authorName}>{t.name}</h4>
                      <p className={styles.authorRole}>{t.role}</p>
                    </div>
                  </header>
                  <div className={styles.starsContainer}>
                    {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                  </div>
                  <p className={styles.quote}>{t.quote}</p>
                  <footer className={styles.cardFooter}>
                    <span className={styles.testimonialDate}>May 2025</span>
                    <span className={styles.verifiedTag}>
                      <i className="fas fa-check-circle"></i> Verified Order
                    </span>
                  </footer>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Desktop Grid */}
        <div className={styles.testimonialsGrid}>
          {TESTIMONIALS.map(t => (
            <div key={t.id} className={styles.testimonialCard}>
              {/* identical card markup as above */}
              <header className={styles.cardHeader}>
                <img src={t.avatar} alt={t.name} className={styles.avatar} />
                <div>
                  <h4 className={styles.authorName}>{t.name}</h4>
                  <p className={styles.authorRole}>{t.role}</p>
                </div>
              </header>
              <div className={styles.starsContainer}>
                {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
              </div>
              <p className={styles.quote}>{t.quote}</p>
              <footer className={styles.cardFooter}>
                <span className={styles.testimonialDate}>May 2025</span>
                <span className={styles.verifiedTag}>
                  <i className="fas fa-check-circle"></i> Verified Order
                </span>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}