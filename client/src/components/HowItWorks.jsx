import styles from '../styles/HowItWorks.module.css';

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Browse Our Menu",
      description: "Explore our variety of authentic Nigerian dishes prepared with traditional recipes and fresh ingredients.",
      icon: "fa-utensils"
    },
    {
      id: 2,
      title: "Place Your Order",
      description: "Select your favorite meals, customize as needed, and add them to your cart for easy checkout.",
      icon: "fa-cart-shopping"
    },
    {
      id: 3,
      title: "Schedule Delivery/Pickup",
      description: "Choose a convenient time for delivery or pickup. We ensure your meals are prepared fresh and on time.",
      icon: "fa-calendar-alt" // Changed from fa-calendar for better visual
    },
    {
      id: 4,
      title: "Enjoy Your Meal",
      description: "Receive your freshly prepared Nigerian meal, ready to heat and enjoy in the comfort of your home.",
      icon: "fa-smile-beam" // Changed from fa-face-smile for better visual
    }
  ];
  
  return (
    <section id="how-it-works" className={styles.howItWorksSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>How It Works</h2>
          <p className={styles.sectionSubtitle}>
            Bringing authentic Nigerian flavors to your doorstep in four simple steps.
          </p>
        </div>
        
        <div className={styles.stepsGrid}>
          {steps.map((step, index) => (
            <div key={step.id} className={styles.stepCard}>
              <div className={styles.stepIconWrapper}>
                <i className={`fas ${step.icon}`}></i>
              </div>
              <div className={styles.stepNumberContainer}>
                <span className={styles.stepNumber}>
                  {step.id}
                </span>
                {/* Render connector line only for lg screens and not for the last item */}
                {index < steps.length - 1 && (
                  <div className={styles.stepConnector}></div>
                )}
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className={styles.ctaButtonContainer}>
          <a 
            href="#menu" 
            className={styles.ctaButton}
          >
            <i className="fas fa-utensils" style={{marginRight: '0.5rem'}}></i>
            Order Now
          </a>
        </div>
      </div>
    </section>
  );
}
