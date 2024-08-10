import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

interface ShoesCardProps {
    name: string;
    category: string;
    price: number;
    image: string;
}

const CartItem = (props: ShoesCardProps) => {
    const { cartItems, addItem, removeItem, clearCart } = useContext(CartContext);

    return (
        <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center space-x-4">
                <img src={props.image} alt="Item 1" className="w-20 h-20 object-cover rounded-lg" />
                <div>
                    <h3 className="text-lg font-semibold">{props.name.slice(0, 20)}...</h3>
                    <p className="text-gray-600">{props.category}</p>
                </div>
            </div>
            <div>
                <div className="join join-vertical lg:join-horizontal">
                    <input className="join-item btn btn-sm" type="radio" name="options" aria-label="40" />
                    <input className="join-item btn btn-sm" type="radio" name="options" aria-label="41" />
                    <input className="join-item btn btn-sm" type="radio" name="options" aria-label="42" />
                    <input className="join-item btn btn-sm" type="radio" name="options" aria-label="43" />
                    <input className="join-item btn btn-sm" type="radio" name="options" aria-label="44" />
                </div>
            </div>
            <div className='flex-row justify-between'>
                <div className="btn btn-error btn-sm" onClick={() => removeItem(props.name)}>Remove</div>
                <p className="text-lg font-semibold">Rs. {props.price}</p>
            </div>
        </div>
    )
}

export default CartItem;