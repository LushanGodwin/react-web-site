import ShoeCard from "../components/ShoeCard";
import bag from "../assets/images/bag.jpeg";
import bag1 from "../assets/images/bag1.jpeg";
import bag2 from "../assets/images/bag2.jpeg";
import bag3 from "../assets/images/bag3.jpeg";
import bag4 from "../assets/images/bag4.jpeg";
import bag5 from "../assets/images/bag5.jpeg";
import bag6 from "../assets/images/bag6.jpeg";
import bag7 from "../assets/images/bag7.jpeg";
import bag8 from "../assets/images/bag8.jpeg";
const Bags = () => {
    return (
        <div className='px-16'>
            <div className='flex flex-wrap my-8 px-9 gap-x-12'>
                <ShoeCard name='Vero Moda Bottie Mini Crossbody Bag' category="Ladies' bags" price={15950} image={bag} />
                <ShoeCard name='Vero Moda Stitchy Crossbody Bag' category="Ladies' bags" price={19950} image={bag1} />
                <ShoeCard name='Carpisa Cuoio Womens HandBag' category="Ladies' bags" price={22950} image={bag2} />
                <ShoeCard name='Carpisa Black Womens Tote Bag' category="Ladies' bags" price={24950} image={bag3} />
                <ShoeCard name='Carpisa Light Taupe Womens Crossbody Bag' category="Ladies' bags" price={18950} image={bag4} />
                <ShoeCard name='Carpisa Black Womens Backpack' category="Ladies' bags" price={22950} image={bag5} />
                <ShoeCard name='Carpisa Onion Womens Backpack' category="Ladies' bags" price={22950} image={bag6} />
                <ShoeCard name='Carpisa Sand Womens Backpack' category="Ladies' bags" price={19950} image={bag7} />
                <ShoeCard name='Carpisa Black Womens Backpack' category="Ladies' bags" price={19950} image={bag8} />

            </div>
        </div>
    )
}
export default Bags;