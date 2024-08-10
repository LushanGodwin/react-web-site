import ShoeCard from '../components/ShoeCard';
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
const MenShoes = () => {
    return (
        <div className='px-16'>
            <div className='flex flex-wrap my-8 px-9 gap-x-12'>
                <ShoeCard name='Nike airmax zoom Pegasus - Yellow and Red' category="Mens' shoes" price={14500} image={shoe6} />
                <ShoeCard name='Air Jordan 4 Retro - A MA MANIERE' category="Mens' shoes" price={16500} image={shoe7} />
                <ShoeCard name='Nike Air Force 1 - white' category="Mens' shoes" price={12500} image={shoe8} />
                <ShoeCard name='Nike airmax zoom Pegasus - orange and green' category="Mens' shoes" price={14500} image={shoe9} />
                <ShoeCard name='Lacoste - Green And White' category="Mens' shoes" price={15500} image={shoe10} />
                <ShoeCard name='Lacoste - White And Blue' category="Mens' shoes" price={15500} image={shoe11} />
                <ShoeCard name="270 NIKE MEN'S SHOE - Brown" category="Mens' shoes" price={14500} image={shoe12} />
                <ShoeCard name="New Balance 9060 - Black" category="Mens' shoes" price={18500} image={shoe13} />
                <ShoeCard name='Nike Air Max 2017 Black and White' category="Mens' shoes" price={14500} image={shoe14} />
                <ShoeCard name="Nike Air Max 270 White and Black" category="Mens' shoes" price={14500} image={shoe15} />
                <ShoeCard name="Nike Air Max 270 Black and Gold" category="Mens' shoes" price={14500} image={shoe16} />
                <ShoeCard name='Nike Air Max 270 white and green shoe' category="Mens' shoes" price={14500} image={shoe17} />
            </div>
        </div>
    )
}
export default MenShoes;