import styles from '../styles/Testimonials.module.css';

export default function Testimonials() {
  const testimonials = [
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

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Customers Say</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers about their experiences with Mama K's Kitchen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4" 
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="mb-2 text-orange-500">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
              <p className="text-gray-700">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
