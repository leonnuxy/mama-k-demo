import React from 'react';
import styles from '../styles/HowItWorks.module.css';
import { combineClasses } from '../utils/styleUtils';

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Browse Our Menu",
      description: "Explore our diverse selection of authentic Nigerian dishes prepared with love and tradition.",
      icon: "fas fa-utensils"
    },
    {
      id: 2,
      title: "Customize Your Order",
      description: "Select your preferred dishes, specify any dietary requirements, and choose your portions.",
      icon: "fas fa-edit"
    },
    {
      id: 3,
      title: "Schedule Delivery",
      description: "Choose a convenient delivery date and time for your freshly prepared meals.",
      icon: "fas fa-calendar-alt"
    },
    {
      id: 4,
      title: "Enjoy Your Meal",
      description: "Receive your delicious food and experience the rich flavors of Nigerian cuisine at home.",
      icon: "fas fa-heart"
    }
  ];

  return (
    <section id="how-it-works" className={styles.howItWorksSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>How It Works</h2>
          <p className={styles.sectionSubtitle}>
            Getting your favorite Nigerian dishes from Mama K's Kitchen is simple. Follow these easy steps to enjoy authentic flavors delivered to your doorstep.
          </p>
        </div>
        
        <div className={styles.stepsContainer}>
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className={styles.stepCard}
              style={{ 
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div className={styles.stepIconContainer}>
                <div className={styles.stepNumber}>{step.id}</div>
                <div className={styles.iconCircle}>
                  <i className={`${step.icon} ${styles.stepIcon}`}></i>
                </div>
              </div>
              
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.callToAction}>
          <p className={styles.ctaText}>Ready to experience the authentic taste of Nigeria?</p>
          <a href="#menu" className={styles.ctaButton}>
            Order Now
          </a>
        </div>
      </div>
    </section>
  );
}
