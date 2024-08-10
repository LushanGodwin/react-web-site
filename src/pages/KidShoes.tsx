import ShoeCard from "../components/ShoeCard";
import kids from "../assets/images/kids.png";
import kids1 from "../assets/images/kids1.png";
import kids2 from "../assets/images/kids2.png";
import kids3 from "../assets/images/kids3.png";
import kids4 from "../assets/images/kids4.png";
import kids5 from "../assets/images/kids5.jpg";
import kids6 from "../assets/images/kids6.png";
import kids7 from "../assets/images/kids7.png";
import kids8 from "../assets/images/kids8.png";
import kids9 from "../assets/images/kids9.png";
import kids10 from "../assets/images/kids10.png";
const KidShoes = () => {
    return (
        <div className='px-16'>
            <div className='flex flex-wrap my-8 px-9 gap-x-12'>
                <ShoeCard name='K600 Kids Trendy Shoes - pink' category="Kids' shoes" price={5000} image={kids} />
                <ShoeCard name='K30 Kids Trendy Shoes - White & Red' category="Kids' shoes" price={4500} image={kids1} />
                <ShoeCard name='K500 Kids Trendy Shoes - White' category="Kids' shoes" price={5000} image={kids2} />
                <ShoeCard name='K400 Kids Trendy Shoes - Black' category="Kids' shoes" price={5000} image={kids3} />
                <ShoeCard name='K10 Kids Trendy Shoes - Grey' category="Kids' shoes" price={4500} image={kids4} />
                <ShoeCard name='K200 Trendy Kids Canvas Sneakers - White' category="Kids' shoes" price={4500} image={kids5} />
                <ShoeCard name='K100 Trendy Kids Canvas Sneakers - Black' category="Kids' shoes" price={4500} image={kids6} />
                <ShoeCard name='K20 Kids Trendy Shoes - Black and Red' category="Kids' shoes" price={4500} image={kids7} />
                <ShoeCard name='K60 Kids Trendy Shoes - Full White' category="Kids' shoes" price={4500} image={kids8} />
                <ShoeCard name='K70 Kids Trendy Shoes - Blue' category="Kids' shoes" price={4500} image={kids9} />
                <ShoeCard name='K50 Kids Trendy Shoes - black' category="Kids' shoes" price={4500} image={kids10} />
            </div>
        </div>
    )
    
}
export default KidShoes;