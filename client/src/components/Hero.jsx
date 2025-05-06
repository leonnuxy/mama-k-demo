import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className="relative bg-gray-900 text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0,0,0,0.6)"
        }}
      ></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Experience Authentic <span className="text-orange-500">West African</span> Cuisine
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Fresh homemade meals delivered to your doorstep. Bringing the taste of West Africa to your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#menu" 
              className={styles.ctaButton}
            >
              Order Now
            </a>
            <a 
              href="#how-it-works" 
              className="bg-white hover:bg-gray-100 text-gray-900 font-medium py-3 px-6 rounded-lg text-center transition-colors"
            >
              How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
