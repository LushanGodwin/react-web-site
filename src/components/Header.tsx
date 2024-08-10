import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import logo from '../assets/images/shoeLogo.png';
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from '../context/CartContext';


const Header = () => {
    const { cartItems, addItem, removeItem, clearCart } = useContext(CartContext);
    const [selectedValue, setSelectedValue] = useState<string>('');
    const navigate = useNavigate();

    const handleSearch = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(event.target.value);
    };

    const handleSearchBtn = () => {
        switch (selectedValue) {
            case 'mens':
                navigate('/menShoes');
                break;
            case 'ladies':
                navigate('/ladiesShoes');
                break;
            case 'kids':
                navigate('/kidShoes');
                break;
            case 'bags':
                navigate('/bags');
                break;
            case 'offers':
                navigate('/offers');
                break;
            default:
                // Handle default case or show an error
                alert('Please select a valid category.');
                break;
        }
    };


    return (
        <div className="navbar bg-base-100 px-20 shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Mens' Wear</a></li>
                        <li><a>Ladies' Wear</a></li>
                        <li><a>Kids' Wear</a></li>
                        <li><a>Bags</a></li>
                        <li><a>Offers</a></li>
                    </ul>
                </div>
                <NavLink to='/'>
                    <img src={logo} className="w-40" />
                </NavLink>

            </div>
            <div className="navbar-center hidden lg:flex ">

                <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-1">
                        <select id="selectOption" className="select select-bordered" onChange={handleSearch}>
                            <option selected disabled>Select Category</option>
                            <option value='mens'>Mens' Wear</option>
                            <option value='ladies'>Ladies' Wear</option>
                            <option value='kids'>Kids' Wear</option>
                            <option value='bags'>Bags</option>
                            <option value='offers'>Offers</option>
                        </select>
                        <input className="input input-bordered w-full" placeholder="Search" />
                        <button className="btn" onClick={handleSearchBtn}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <ul className="menu menu-horizontal px-1 text-lg">
                        <li><a><NavLink to='/menShoes'>Mens' Wear</NavLink></a></li>
                        <li><a><NavLink to='/ladiesShoes'>Ladies' Wear</NavLink></a></li>
                        <li><a><NavLink to='/kidShoes'>Kids' Wear</NavLink></a></li>
                        <li><a><NavLink to='/bags'>Bags</NavLink></a></li>
                        <li><a><NavLink to='/offers'>Offers</NavLink></a></li>
                    </ul>
                </div>


            </div>
            <div className="navbar-end">

                <NavLink to='/cart' className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
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
                            <span className="badge badge-sm indicator-item">{cartItems.length}</span>
                        </div>
                    </div>
                </NavLink>

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <FontAwesomeIcon icon={faHeart} size="2x" />
                            <span className="badge badge-sm indicator-item">1</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header;