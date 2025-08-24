import React, { useContext } from 'react'
import Container from './Container'
import { ApiData } from './ContextApi'
import { FaHeart } from 'react-icons/fa6'
import { HiOutlineRefresh } from 'react-icons/hi'
import { FaLongArrowAltLeft, FaLongArrowAltRight, FaShoppingCart } from 'react-icons/fa'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick}>
            <FaLongArrowAltRight className='h-[50px] w-[50px] bg-[#00000033] rounded-[50%] absolute top-[35%] right-[20px] text-[#FFFFFF]' />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            onClick={onClick}
        >
            <FaLongArrowAltLeft className='h-[50px] w-[50px] bg-[#00000033] rounded-[50%] absolute top-[35%] left-[0px] text-[#FFFFFF] z-100' />
        </div>
    );
}

function NewArrivals() {
    let {info,loading} = useContext(ApiData)
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    }


    if(loading){
        return(
            <>
            <h2>loading....</h2>
            </>
        )
    }

    return (
        <Container>
            <div className=''>
                <h2 className='text-[39px] font-bold font-dm'>New Arrivals</h2>
                <div className='lg:pt-10'>
                    <Slider {...settings}>
                        {info.map((item) => (
                            <div className='lg:w-3/12 w-6/12 pr-4 relative'>
                                <div className=' relative group'>
                                    <Link to="/shop">
                                    <img src={item.thumbnail} className='w-full'></img>
                                    </Link>
                                    <div className='w-full right-0 bottom-0 p-[20px] absolute bg-[#FFFFFF] opacity-0 group-hover:opacity-100
                                 duration-300 ease-in-out'>
                                        <div className='flex justify-end gap-3 items-center'>
                                            <p className='text-[#767676] text-[16px] font-dm hover:text-[#262626] hover:font-semibold'>Add to Wish List</p>
                                            <FaHeart />
                                        </div>
                                        <div className='flex justify-end gap-3 items-center pt-3'>
                                            <p className='text-[#767676] text-[16px] font-dm hover:text-[#262626] hover:font-semibold'>Compare</p>
                                            <HiOutlineRefresh />
                                        </div>
                                        <div className='flex justify-end gap-3 items-center pt-3'>
                                            <p className=' text-[#767676] text-[16px] font-dm hover:text-[#262626] hover:font-semibold'>Add to Cart</p>
                                            <FaShoppingCart />
                                        </div>
                                    </div>
                                </div>
                                <h1 className='top-[20px] left-[20px] absolute py-[7px] px-[20px] bg-[#262626] text-[#FFFFFF] font-dm '>{item.discountPercentage}</h1>
                                <div className='flex justify-between items-center pt-4'>
                                    <h2 className='text-[18px] font-dm font-medium'>{item.title}</h2>
                                    <p className='text-[14px] text-[#767676] font-dm'>${item.price}</p>
                                </div>
                                <p className='text-[14px] text-[#767676] font-dm pt-3'>Black</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </Container>
    )
}

export default NewArrivals