import { useCartStore } from "../../store/cartStore";
import '../../styles/cart-modal.css'

export default function CartModal({ onClose }){

    // get cart items with function cartItems from store
    const cartItems = useCartStore(state => state.cartItems);

    // update quantity for single item with function updateQuantity from store
    const updateQuantity = useCartStore(state => state.updateQuantity);

    // remove item from cart with function removeFromCart from store
    const removeFromCart = useCartStore(state => state.removeFromCart);

    // empty cart with function clearCart from store
    const clearCart = useCartStore(state => state.clearCart);

    // count the total amount for all the items in cart
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);


    const cartItemElements = cartItems.map(item => {
        return (
            <li key={item.id} className="cart-item">
                <div>
                    <p className="item-name">{item.name}</p>
                    
                    <div className="price-quantity">
                        <button className="remove-item-btn" onClick={() => removeFromCart(item.id)}>
                            <img src="/bin_16.png" alt="recycle-bin-icon" />
                        </button>
                        <p>{item.quantity} x {item.price}</p>
                        <div className="quantity-btns">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>-</button>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                        </div>
                    </div>
                    
                </div>
            </li>
        )
    })

    return (
        <section className="modal-overlay">
            <div className="modal-content cart-modal">
                <h2>Your Cart</h2>

                {
                    cartItems.length === 0 

                    ?

                    <p className="empty-msg">Your cart is empty.</p>

                    :

                    <>
                        <ul className="cart-item-list">
                            {cartItemElements}
                        </ul>
                        <p className="total-amount">Total: <strong>{total.toFixed(2)}</strong></p>
                    </>

                }
                <button className="close-cart-modal-btn" onClick={onClose}>&#10006;</button>
            </div>
        </section>
    )





}