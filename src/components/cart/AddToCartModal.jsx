import '../../styles/modal.css'
import { useState } from "react";
import { useCartStore } from "../../store/cartStore";

export default function AddToCartModal({ product, onClose }){

    // state variable to store number of items that user wants to add to cart
    const [quantity, setQuantity] = useState(1)

    // add to cart funtion from store
    const addToCart = useCartStore(state => state.addToCart)

    // on click event handler for adding items to cart (after adding item modal will close -> onClose)
    const handleSubmit = () => {
        addToCart(product, Number(quantity))
        onClose()
    }

    // increase amount of items to add to cart
    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1)
    }

    // decrease amount of items to add to cart
    const decreaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity !== 1 ? prevQuantity - 1 : prevQuantity)
    }


    return(
        <section className="modal-overlay">
            <main className="modal-content">
                <h3 className='title'>Add to cart</h3>
                
                <div className='adding-product-info'>
                    <p className='product-name'>{product.name}</p>
                    <p className='product-price'>${product.price}</p>
                </div>    

                <div className='quantity-actions'>
                    <p>Quantity: {quantity}</p>

                    <div className='quantity-actions-buttons'>
                        <button className="decrease-quantity" onClick={decreaseQuantity}>-</button>
                        <button className="increase-quantity" onClick={increaseQuantity}>+</button>
                    </div>
                </div>

                
                <button className='add-to-cart-btn add' onClick={handleSubmit}>Add to cart</button>
                <button className='close-modal-btn' onClick={onClose}> &#10006; </button>
            </main>
        </section>
    )


}