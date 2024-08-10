import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartContext } from '../context/CartContext';
import React, { useContext } from 'react';

interface ShoeCardProps {
    name: string;
    category: string;
    price: number;
    image: string;
}

const ShoeCard = (props: ShoeCardProps) => {
    const { addItem } = useContext(CartContext);

    const handleAddCart = () => {
        addItem({ name: props.name, price: props.price, image: props.image, category: props.category });
    }

    return (
        <div className="card mb-12 w-72 shadow-xl">
            <figure className="px-5 pt-10">
                <img
                    src={props.image}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h3 className="text-gray-700 ">{props.category}</h3>
                <p>{props.name}</p>
                <div className="flex justify-between items-center">
                    <p className="font-bold text-lg">Rs. {props.price}</p>
                    <div>
                        <button className="btn btn-ghost">
                            <FontAwesomeIcon icon={faHeart} size="2x" className="text-red-500" />
                        </button>
                        <button className="btn btn-ghost" onClick={handleAddCart}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoeCard;
