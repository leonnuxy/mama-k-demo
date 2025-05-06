import { useState } from 'react';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import CartSidebar from "./components/CartSidebar";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const toggleCart = () => {
    setIsCartOpen(prevState => !prevState);
  };

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
  };

  const removeFromCart = (itemId) => {
    setCart(currentCart => currentCart.filter(item => item.id !== itemId));
  };

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

  return (
    <>
      <Header cartItems={cart} toggleCart={toggleCart} />
      <Hero />
      <Menu addToCart={addToCart} />
      <HowItWorks />
      <Testimonials />
      <Footer />
      <CartSidebar 
        isOpen={isCartOpen} 
        close={() => setIsCartOpen(false)} 
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />
    </>
  );
}

export default App
