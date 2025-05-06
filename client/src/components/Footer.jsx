import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          {/* Brand & Description */}
          <div>
            <div className={styles.brand}>
              <div className={styles.brandLogo}>
                MK
              </div>
              <h3 className="text-xl font-bold text-white">
                Mama K's <span className="text-orange-500">Kitchen</span>
              </h3>
            </div>
            <p className="mb-4">
              Authentic West African cuisine delivered to your doorstep. Made with love, traditional recipes, and the freshest ingredients.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Menu", "How It Works", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s/g, "-")}`} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-orange-500"></i>
                <span>123 Main Street<br />Atlanta, GA 30303</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-3 text-orange-500"></i>
                <span>(404) 555-7890</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-orange-500"></i>
                <span>hello@mamakskitchen.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Mama K's Kitchen. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4 text-sm">
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
