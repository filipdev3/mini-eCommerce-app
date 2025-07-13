import { useState } from "react"
import { useCartStore } from "../../store/cartStore"
import '../../styles/shop-header.css'
import CartModal from "../cart/CartModal";

export default function Header() {

    const [showCart, setShowCart] = useState(false);

    // use reduce array method to calculate number of items in cart
    const totalItems = useCartStore(state => 
        state.cartItems.reduce((total, item) => total + item.quantity, 0)
    )
    

    
    return(
        <header className="shop-header">
            <img className="logo" src="/bosch.svg" alt="bosch-icon" />
            <button className="header-cart-button" onClick={() => setShowCart(true)}>
                <img src="/add-to-cart(2).png" alt="" />
                <h1 className="number-of-items">{totalItems}</h1>
            </button>

            {showCart && <CartModal onClose={() => setShowCart(false)}/>}
        </header>


    )
}

