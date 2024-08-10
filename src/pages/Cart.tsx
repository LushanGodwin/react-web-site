import CartItem from "../components/CartItem";
import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';


const Cart = () => {
    const { cartItems, addItem, removeItem, clearCart } = useContext(CartContext);

    const [subtotal, setSubtotal] = useState<number>(0);
    const [tax, setTax] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        const newSubtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
        setSubtotal(newSubtotal);

        const newTax = newSubtotal * 0.1;
        setTax(newTax);

        const newTotal = newSubtotal + newTax;
        setTotal(newTotal);
    }, [cartItems]);

    const handleCheckout = () => {
        clearCart();
        alert('Purchase completed');
    }

    return (
        <main className="flex-1 p-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Cart Items */}
                <div className="md:col-span-2 bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
                    {cartItems.map((cartItem, index) => {
                        return (
                            <CartItem key={index} name={cartItem.name} image={cartItem.image} price={cartItem.price} category={cartItem.category} />
                        );
                    })}
                </div>

                {/* Cart Details */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Cart Details</h2>
                    <div className="space-y-4">
                        <div className="flex justify-between">
                            <span className="text-lg font-semibold">Subtotal:</span>
                            <span className="text-lg font-semibold">Rs. {subtotal}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-lg font-semibold">Tax (10%):</span>
                            <span className="text-lg font-semibold">Rs. {tax}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-lg font-semibold">Total:</span>
                            <span className="text-lg font-semibold">Rs. {total}</span>
                        </div>
                    </div>
                    <button className="btn btn-primary mt-6 w-full" onClick={handleCheckout}>Checkout</button>
                </div>
            </div>
        </main>
    )
}

export default Cart;