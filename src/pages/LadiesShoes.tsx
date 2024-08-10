import ShoeCard from '../components/ShoeCard';
import shoe20 from "../assets/images/shoe20.png"
import shoe21 from "../assets/images/shoe21.png"
import shoe22 from "../assets/images/shoe22.png"
import shoe23 from "../assets/images/shoe23.png"
import shoe24 from "../assets/images/shoe24.png"
import shoe25 from "../assets/images/shoe25.png"
const LadiesShoes = () => {
    return (
        <div className='px-16'>
            <div className='flex flex-wrap my-8 px-9 gap-x-12'>
                <ShoeCard name='D750 Adidas Ladies Beige & White shoe - Beige' category="Ladies' shoes" price={8999} image={shoe20} />
                <ShoeCard name='D910 Ladies Big Chunky Platform Shoe - Half white brown' category="Ladies' shoes" price={8990} image={shoe21} />
                <ShoeCard name='D930 Ladies Big Chunky Platform Shoe - White and pink' category="Ladies' shoes" price={8999} image={shoe22} />
                <ShoeCard name='D350 Ladies Big Chunky Platform Shoe - White & Black' category="Ladies' shoes" price={8999} image={shoe23} />
                <ShoeCard name='D370 Ladies Big Chunky Platform Shoe - Half white & Pink' category="Ladies' shoes" price={8999} image={shoe24} />
                <ShoeCard name='D360 Ladies Big Chunky Platform Shoe - Half white & Blue' category="Ladies' shoes" price={8999} image={shoe25} />
            </div>
        </div>
    )

}
export default LadiesShoes;