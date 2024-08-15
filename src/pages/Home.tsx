import logo from '../assets/images/shoeAdvertise.png'
import ShoeCard from '../components/ShoeCard';
import shoe from "../assets/images/shoe.jpg"
import shoe1 from "../assets/images/shoe1.jpg"
import shoe2 from "../assets/images/shoe2.jpg"
import shoe3 from "../assets/images/shoe3.jpg"
import shoe4 from "../assets/images/shoe4.jpg"
import shoe5 from "../assets/images/shoe5.jpg"
import shoe6 from "../assets/images/shoe6.jpg"
import shoe7 from "../assets/images/shoe7.jpg"
import shoe8 from "../assets/images/shoe8.jpg"
import shoe9 from "../assets/images/shoe9.jpg"
import shoe10 from "../assets/images/shoe10.jpg"
import shoe11 from "../assets/images/shoe11.jpg"
import shoe12 from "../assets/images/shoe12.jpg"
import shoe13 from "../assets/images/shoe13.jpg"
import shoe14 from "../assets/images/shoe14.jpg"
import shoe15 from "../assets/images/shoe15.jpg"
import shoe16 from "../assets/images/shoe16.jpg"
import shoe17 from "../assets/images/shoe17.jpg"
import shoe20 from "../assets/images/shoe20.png"
import shoe21 from "../assets/images/shoe21.png"
import shoe22 from "../assets/images/shoe22.png"
import shoe23 from "../assets/images/shoe23.png"
import shoe24 from "../assets/images/shoe24.png"
import shoe25 from "../assets/images/shoe25.png"
import Slider from "react-slick";
import Topic from '../components/Topic';
import { useState } from 'react';
// import React, { useContext } from 'react';
// import { CartContext } from '../context/CartContext';

const Home = () => {

    const settings = {

        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const [productType, setProductType] = useState<string>('mens');
    // const { cartItems, addItem, removeItem, clearCart } = useContext(CartContext);

    return (
        <div>
            <div className='flex justify-center mt-8'>
                <img src={logo} className='h-96 min-h-[10rem] object-cover' />
            </div>
            <div className='w-full px-12 my-8 mb-20'>
                <Topic title='Top Deals' />
                <div className="slider-container">
                    <Slider {...settings}>
                        <ShoeCard name='Nike airmax zoom Pegasus - Yellow and Red' category="Mens' shoes" price={14500} image={shoe6}/>
                        <ShoeCard name='Air Jordan 4 Retro - A MA MANIERE' category="Mens' shoes" price={16500} image={ shoe7} />
                        <ShoeCard name='Nike Air Force 1 - white' category="Mens' shoes" price={12500} image={shoe8} />
                        <ShoeCard name='Nike airmax zoom Pegasus - orange and green' category="Mens' shoes" price={14500} image={shoe9} />
                        <ShoeCard name='Lacoste - Green And White' category="Mens' shoes" price={15500} image={shoe10} />
                        <ShoeCard name='Lacoste - White And Blue' category="Mens' shoes" price={15500} image={shoe11}/>
                    </Slider>
                </div>
            </div>

            <div className='w-full px-12 my-8'>
                <Topic title='Best Sell Products' />
                <div className="slider-container">
                    <Slider {...settings}>
                        <ShoeCard name="270 NIKE MEN'S SHOE - Brown" category="Mens' shoes" price={14500} image={shoe12}/>
                        <ShoeCard name="New Balance 9060 - Black" category="Mens' shoes" price={18500} image={shoe13} />
                        <ShoeCard name='Nike Air Max 2017 Black and White' category="Mens' shoes" price={14500} image={shoe14} />
                        <ShoeCard name="Nike Air Max 270 White and Black" category="Mens' shoes" price={14500} image={shoe15} />
                        <ShoeCard name="Nike Air Max 270 Black and Gold" category="Mens' shoes" price={14500} image={shoe16}/>
                        <ShoeCard name='Nike Air Max 270 white and green shoe' category="Mens' shoes" price={14500} image={shoe17}/>

                    </Slider>
                </div>
            </div>

            <div className='w-full px-12 my-8'>
                <Topic title='Shoe Products' />
                <div className='flex'>
                    <div onClick={() => setProductType('mens')} className='btn btn-ghost'>
                        <h2 className='mx-4'>Mens' Shoes</h2>
                    </div>
                    <div onClick={() => setProductType('ladies')} className='btn btn-ghost'>
                        <h2 className='mx-4'>Ladies' Shoes</h2>
                    </div>
                </div>
                {productType === 'mens' ?
                    <div className="slider-container">
                        <Slider {...settings}>
                            <ShoeCard name='Nike Blue & White' category="Mens' shoes" price={8999} image={shoe} />
                            <ShoeCard name="Adidas Men's Black & White" category="Mens' shoes" price={6500} image={shoe1} />
                            <ShoeCard name='Nike Airmax Zoom Pegasus - Black' category="Mens' shoes" price={14500} image={shoe2} />
                            <ShoeCard name='New Balance 574 Classic - Ash and Black' category="Mens' shoes" price={14500} image={shoe3} />
                            <ShoeCard name='Nike airmax zoom Pegasus - blue and orange' category="Mens' shoes" price={14500} image={shoe4} />
                            <ShoeCard name='Nike air zoom - Black and orange' category="Mens' shoes" price={7500} image={shoe5} />
                        </Slider>
                    </div>

                    :

                    <div className="slider-container">
                        <Slider {...settings}>
                            <ShoeCard name='D750 Adidas Ladies Beige & White shoe - Beige' category="Ladies' shoes" price={8999} image={shoe20} />
                            <ShoeCard name='D910 Ladies Big Chunky Platform Shoe - Half white brown' category="Ladies' shoes" price={8990} image={shoe21}  />
                            <ShoeCard name='D930 Ladies Big Chunky Platform Shoe - White and pink' category="Ladies' shoes" price={8999} image={shoe22}  />
                            <ShoeCard name='D350 Ladies Big Chunky Platform Shoe - White & Black' category="Ladies' shoes" price={8999} image={shoe23}  />
                            <ShoeCard name='D370 Ladies Big Chunky Platform Shoe - Half white & Pink' category="Ladies' shoes" price={8999} image={shoe24}  />
                            <ShoeCard name='D360 Ladies Big Chunky Platform Shoe - Half white & Blue' category="Ladies' shoes" price={8999} image={shoe25} />
                        </Slider>
                    </div>
                }

            </div>

        </div>

    )
}

export default Home;