import { useState, useEffect } from 'react';

// Component imports
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import CartSidebar from "./components/CartSidebar";

/**
 * Main App component that serves as the entry point for the application
 */
function App() {
  // State management for cart
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState(() => {
    // Initialize cart from localStorage if available
    const savedCart = localStorage.getItem('mamaKCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('mamaKCart', JSON.stringify(cart));
  }, [cart]);

  /**
   * Toggle the cart sidebar visibility
   */
  const toggleCart = () => {
    setIsCartOpen(prevState => !prevState);
  };

  /**
   * Add an item to the cart or increment its quantity if already present
   * @param {Object} item - The menu item to add to cart
   */
  const addToCart = (item) => {
    setCart(currentCart => {
      const existingItem = currentCart.find(cartItem => cartItem.id === item.id);
      
      if (existingItem) {
        return currentCart.map(cartItem => 
          cartItem.id === item.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...currentCart, { ...item, quantity: 1 }];
      }
    });
    
    // Open cart when adding items
    if (!isCartOpen) {
      setIsCartOpen(true);
    }
  };

  /**
   * Remove an item from the cart
   * @param {string|number} itemId - The ID of the item to remove
   */
  const removeFromCart = (itemId) => {
    setCart(currentCart => currentCart.filter(item => item.id !== itemId));
  };

  /**
   * Update the quantity of an item in the cart
   * @param {string|number} itemId - The ID of the item to update
   * @param {number} newQuantity - The new quantity
   */
  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    
    setCart(currentCart => 
      currentCart.map(item => 
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Calculate cart total items for the header badge
  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="app">
      {/* Header with cart functionality */}
      <Header 
        cartItemCount={totalCartItems} 
        toggleCart={toggleCart} 
      />
      
      {/* Main content sections */}
      <main>
        <Hero />
        <Menu addToCart={addToCart} />
        <HowItWorks />
        <Testimonials />
      </main>
      
      {/* Footer section */}
      <Footer />
      
      {/* Cart sidebar */}
      <CartSidebar 
        isOpen={isCartOpen} 
        close={() => setIsCartOpen(false)} 
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}

export default App;
