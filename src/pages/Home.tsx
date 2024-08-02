import logo from '../assets/images/shoeAdvertise.png'
import ShoeCard from '../components/ShoeCard';
import Carousel from "react-multi-carousel";

const Home = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
    
    return (
        <div>
            <div>
                <img src={logo} className='h-[480px] w-full' />
            </div>
            <div className='w-full px-12 my-8'>
                <div className='w-fit mb-4'>
                    <h2 className='text-red-600 text-3xl font-bold mb-3'>Top Deals</h2>
                    <div className='bg-red-600 w-3/4 h-0.5'></div>
                </div>
                <div className='flex w-full justify-between'>
                    {/* <Carousel
                        swipeable={false}
                        draggable={false}
                        showDots={true}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        // deviceType={this.props.deviceType}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                    > */}
                        <ShoeCard name='Nike' category="Mens' shoes" price={7500} image='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'/>
                        {/* <ShoeCard />
                        <ShoeCard />
                        <ShoeCard /> */}
                    {/* </Carousel> */}
                </div>
            </div>
        </div>

    )
}

export default Home;