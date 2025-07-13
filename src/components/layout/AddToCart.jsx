import { useState } from 'react'
import '../../styles/add-to-cart.css'
import AddToCartModal from '../cart/AddToCartModal'

export default function AddToCart({ product }){

    // state variable used to determine if modal shoud show or hide
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button className="add-to-cart-btn" onClick={() => setShowModal(true)}>
                <img src="/add-to-cart(2).png" alt="" />
            </button>

            {showModal && (
                <AddToCartModal product={product} onClose={() => setShowModal(false)}/>
            )}
        </>
    )
}