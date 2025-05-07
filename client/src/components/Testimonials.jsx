import React from 'react';
import Slider from 'react-slick';
import styles from '../styles/Testimonials.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Testimonials() {
  const testimonials = [ /* same array as before */
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Regular Customer",
      quote: "The jollof rice is incredible! Perfectly spiced and the portion sizes are generous. This is the closest thing to my grandmother's cooking I've found.",
      avatar: "https://randomuser.me/api/portraits/women/23.jpg"
    },
    {
      id: 2,
      name: "Marcus Chen",
      role: "Food Blogger",
      quote: "I was blown away by the authenticity of the flavors. The egusi soup took me right back to my trip to Nigeria. Highly recommend!",
      avatar: "https://randomuser.me/api/portraits/men/54.jpg"
    },
    {
      id: 3,
      name: "Amara Okafor",
      role: "First-time Customer",
      quote: "Fast delivery, great packaging, and most importantly - delicious food! The suya skewers were perfectly seasoned and the puff puff was amazing!",
      avatar: "https://randomuser.me/api/portraits/women/85.jpg"
    }

   ];

  // Slider settings: single slide on <768px, 3 on ≥768px
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ],
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000
  };

  return (
    <section id="testimonials" className={styles.testimonialsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>What Our Customers Say</h2>
          <p className={styles.sectionSubtitle}>
            Don't just take our word for it – hear from our satisfied customers about their experiences with Mama K's Kitchen.
          </p>
        </div>

        {/* Carousel wrapper */}
        <Slider {...settings} className={styles.slider}>
          {testimonials.map(t => (
            <div key={t.id} className={styles.testimonialCard}>
              <div className={styles.cardHeader}>
                <img src={t.avatar} alt={t.name} className={styles.avatar}/>
                <div>
                  <h4 className={styles.authorName}>{t.name}</h4>
                  <p className={styles.authorRole}>{t.role}</p>
                </div>
              </div>
              <div className={styles.starsContainer}>
                {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
              </div>
              <p className={styles.quote}>{t.quote}</p>
              <div className={styles.cardFooter}>
                <span className={styles.testimonialDate}>May 2025</span>
                <span className={styles.verifiedTag}>
                  <i className="fas fa-check-circle" style={{color:'var(--teal-accent)', marginRight:'0.25rem'}}/>
                  Verified Order
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
