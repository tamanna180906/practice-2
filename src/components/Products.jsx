import React, { useState } from 'react'
import Container from './Container'
import { MdChevronLeft } from 'react-icons/md'
import { HiPlusSm } from 'react-icons/hi'
import { FaMinus } from 'react-icons/fa'

function Products() {

    let [show,setshow]=useState(false)
    let [showTwo,setShowTwo]=useState(false)
    let [showThree,setShowThree]=useState(false)
    let [showFour,setShowFour]=useState(false)



    return (
        <div className='py-[100px]'>
            <Container>
                <div className=''>
                    <h2 className='text-[#262626] font-dm text-[45px] font-bold'>Products</h2>
                    <div className='flex items-center'>
                        <p className='text-[#767676] font-dm text-[12px]'>Home</p>
                        <MdChevronLeft />
                        <p className='text-[#767676] font-dm text-[12px]'>Products</p>
                    </div>
                </div>
                <div className='flex justify-between pt-[100px]'>
                    <div className='w-[23%]'>
                        <div className='flex justify-between items-center'>
                            <h2 onClick={()=>setshow(!show)} className='text-[#262626] text-[20px] font-dm'>Shop by Color</h2>
                             {show?<FaMinus/> :<HiPlusSm />}
                        </div>
                        <div className=''>
                            {show&&
                                <ul className='pt-4'>
                                    <li className='py-4 border-b-2 border-[#F0F0F0]'>
                                        <div className='flex justify-between items-center'>
                                            <h2 className='text-[#767676] text-[16px] font-dm capitalize'>All Product</h2>
                                            <HiPlusSm />
                                        </div>
                                    </li>
                                </ul>
                                }
                        </div>
                        <div className='pt-[50px] flex justify-between items-center'>
                            <h2 onClick={()=>setShowTwo(!showTwo)} className='text-[#262626] text-[20px] font-dm'>Shop by Color</h2>
                            {showTwo ? <FaMinus /> : <HiPlusSm/>}
                        </div>
                        <div className=''>
                            {showTwo&&
                                <ul className='pt-4'>
                                    <li className='py-4 border-b-2 border-[#F0F0F0]'>
                                        <div className='flex items-center'>
                                            <div className='bg-[#000000] h-[10px] w-[10px] rounded-full '></div>
                                            <h2 className='text-[#767676] text-[16px] pl-[10px] font-dm'>Color 1</h2>
                                        </div>
                                    </li>
                                    <li className='py-4 border-b-2 border-[#F0F0F0]'>
                                        <div className='flex items-center'>
                                            <div className='bg-[#FF8686] h-[10px] w-[10px] rounded-full '></div>
                                            <h2 className='text-[#767676] text-[16px] pl-[10px] font-dm'>Color 2</h2>
                                        </div>
                                    </li>
                                    <li className='py-4 border-b-2 border-[#F0F0F0]'>
                                        <div className='flex items-center'>
                                            <div className='bg-[#7ED321] h-[10px] w-[10px] rounded-full '></div>
                                            <h2 className='text-[#767676] text-[16px] pl-[10px] font-dm'>Color 3</h2>
                                        </div>
                                    </li>
                                    <li className='py-4 border-b-2 border-[#F0F0F0]'>
                                        <div className='flex items-center'>
                                            <div className='bg-[#B6B6B6] h-[10px] w-[10px] rounded-full '></div>
                                            <h2 className='text-[#767676] text-[16px] pl-[10px] font-dm'>Color 4</h2>
                                        </div>
                                    </li>
                                    <li className='py-4 border-b-2 border-[#F0F0F0]'>
                                        <div className='flex items-center'>
                                            <div className='bg-[#15CBA5] h-[10px] w-[10px] rounded-full '></div>
                                            <h2 className='text-[#767676] text-[16px] pl-[10px] font-dm'>Color 5</h2>
                                        </div>
                                    </li>
                                </ul>
                                }
                        </div>
                        <div className='pt-[50px] flex justify-between items-center'>
                            <h2 onClick={()=>setShowThree(!showThree)} className='text-[#262626] text-[20px] font-dm'>Shop by Brand</h2>
                            {showThree ? <FaMinus /> : <HiPlusSm/>}
                        </div>
                        <div className=''>
                            {showThree&&
                                <ul className='pt-4'>
                                    <li className='py-4 border-b-2 border-[#F0F0F0]'>
                                        <h2 className='text-[#767676] text-[16px] pl-[10px] font-dm'>Brand 1</h2>
                                    </li>
                                    <li className='py-4 border-b-2 border-[#F0F0F0]'>
                                        <h2 className='text-[#767676] text-[16px] pl-[10px] font-dm'>Brand 2</h2>
                                    </li>
                                    <li className='py-4 border-b-2 border-[#F0F0F0]'>
                                        <h2 className='text-[#767676] text-[16px] pl-[10px] font-dm'>Brand 3</h2>
                                    </li>
                                    <li className='py-4 border-b-2 border-[#F0F0F0]'>
                                        <h2 className='text-[#767676] text-[16px] pl-[10px] font-dm'>Brand 4</h2>
                                    </li>
                                    <li className='py-4 border-b-2 border-[#F0F0F0]'>
                                        <h2 className='text-[#767676] text-[16px] pl-[10px] font-dm'>Brand 5</h2>
                                    </li>
                                </ul>
                                }
                        </div>
                        <div className='pt-[50px] flex justify-between items-center'>
                            <h2 onClick={()=>setShowFour(!showFour)} className='text-[#262626] text-[20px] font-dm'>Shop by Price</h2>
                            {showFour ? <FaMinus /> : <HiPlusSm/>}
                        </div>
                        <div className=''>
                            {showFour&&
                                <ul className='pt-4'>
                                    <li className='py-4 border-b-2 border-[#F0F0F0]'>
                                        <h2 className='text-[#767676] text-[16px] pl-[10px] font-dm'>$0.00 - $9.99</h2>
                                    </li>
                                    <li className='py-4 border-b-2 border-[#F0F0F0]'>
                                        <h2 className='text-[#767676] text-[16px] pl-[10px] font-dm'>$10.00 - $19.99</h2>
                                    </li>
                                    <li className='py-4 border-b-2 border-[#F0F0F0]'>
                                        <h2 className='text-[#767676] text-[16px] pl-[10px] font-dm'>$20.00 - $29.99</h2>
                                    </li>
                                    <li className='py-4 border-b-2 border-[#F0F0F0]'>
                                        <h2 className='text-[#767676] text-[16px] pl-[10px] font-dm'>$30.00 - $39.99</h2>
                                    </li>
                                    <li className='py-4 border-b-2 border-[#F0F0F0]'>
                                        <h2 className='text-[#767676] text-[16px] pl-[10px] font-dm'>$40.00 - $69.99</h2>
                                    </li>
                                </ul>
                                }
                        </div>
                    </div>
                    <div className='w-[74%]'>2</div>
                </div>
            </Container>
        </div>
    )
}

export default Products