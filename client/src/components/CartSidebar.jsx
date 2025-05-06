import styles from '../styles/CartSidebar.module.css';

export default function CartSidebar({ isOpen, close, cart, updateQuantity, removeFromCart }) {
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`}
        onClick={close}
      ></div>
      
      {/* Sidebar */}
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>Your Cart</h2>
          <button 
            onClick={close}
            className={styles.closeButton}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <div className={styles.content}>
          {cart.length === 0 ? (
            <div className={styles.emptyCart}>
              <div className={styles.emptyCartIcon}>
                <i className="fas fa-shopping-cart"></i>
              </div>
              <p>Your cart is empty</p>
              <button 
                onClick={close}
                className={styles.checkoutButton}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className={styles.cartItems}>
                {cart.map(item => (
                  <div key={item.id} className={styles.cartItem}>
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className={styles.itemImage}
                    />
                    <div className={styles.itemDetails}>
                      <div className={styles.itemHeader}>
                        <h3 className={styles.itemName}>{item.name}</h3>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className={styles.removeButton}
                        >
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </div>
                      <p className={styles.itemPrice}>${item.price.toFixed(2)}</p>
                      <div className={styles.quantityControl}>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className={styles.quantityButton}
                        >
                          <i className="fas fa-minus"></i>
                        </button>
                        <span className={styles.quantity}>{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className={styles.quantityButton}
                        >
                          <i className="fas fa-plus"></i>
                        </button>
                        <div className={styles.itemTotal}>
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className={styles.footer}>
                <div className={styles.summary}>
                  <div className={styles.totalRow}>
                    <span>Total:</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                </div>
                <button className={styles.checkoutButton}>
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
