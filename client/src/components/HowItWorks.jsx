import styles from '../styles/HowItWorks.module.css';

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Browse Our Menu",
      description: "Explore our variety of authentic West African dishes prepared with traditional recipes and fresh ingredients.",
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
      title: "Schedule Delivery",
      description: "Choose a delivery time that works for you, from same-day delivery to planning meals for the week.",
      icon: "fa-calendar"
    },
    {
      id: 4,
      title: "Enjoy Your Meal",
      description: "Receive your freshly prepared West African meal, ready to heat and enjoy in the comfort of your home.",
      icon: "fa-face-smile"
    }
  ];
  
  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How It Works</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Bringing authentic West African flavors to your doorstep in four simple steps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map(step => (
            <div key={step.id} className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 text-2xl mx-auto mb-4">
                <i className={`fas ${step.icon}`}></i>
              </div>
              <div className="relative mb-6 flex justify-center">
                <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                  {step.id}
                </span>
                {step.id < steps.length && (
                  <div className="hidden lg:block absolute top-4 left-full w-full h-0.5 bg-orange-300" style={{ width: 'calc(100% - 1rem)' }}></div>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#menu" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Order Now
          </a>
        </div>
      </div>
    </section>
  );
}
