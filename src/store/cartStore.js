import { create } from "zustand";

// load cart from localStorage
const loadCartFromStorage = () => {
    try{

        const stored = localStorage.getItem("cart");
        return stored ? JSON.parse(stored) : []; // if there are no data in storage return empty array

    } catch(err){
        console.error("Failed to load cart from localStorage", err)
        return [];
    }
}

// save cart to localStorage
const saveCartToStorage = (cartItems) => {
    try{
        localStorage.setItem("cart", JSON.stringify(cartItems));
    } catch(err){
        console.error("Failed to save cart to localStorage", err)
    }
}


export const useCartStore = create((set, get) => ({

    // initial value
    cartItems: loadCartFromStorage(),

    // add item to cart
    addToCart: (product, quantity) => {
        const existing = get().cartItems.find(item => item.id === product.id)
        
        let updatedCart;

        if(existing) {
            updatedCart = get().cartItems.map(item => 
                item.id === product.id
                ?
                {...item, quantity: item.quantity + quantity}
                :
                item
            )
        } else {
            updatedCart = [...get().cartItems, {...product, quantity}]
        }

        saveCartToStorage(updatedCart)
        set({ cartItems: updatedCart })
    },


    // update number of added items in cart
    updateQuantity: (productId, quantity) => {
        const updatedCart = get().cartItems.map(item => 
            item.id === productId ? {...item, quantity} : item
        )
        saveCartToStorage(updatedCart)
        set({ cartItems: updatedCart })
    },

    // remove item from cart
    removeFromCart: (productId) => {
        const updatedCart = get().cartItems.filter(item => item.id !== productId)
        saveCartToStorage(updatedCart)
        set({ cartItems: updatedCart })
    },

    // empty cart
    clearCart: () => {
        saveCartToStorage(updatedCart)
        set({ cartItems: updatedCart })
    }





}))