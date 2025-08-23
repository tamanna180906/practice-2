import React from 'react'
import Container from './Container'
import nav from "../assets/nav.png"
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa6'
import { CiInstagram } from 'react-icons/ci'

function Footer() {
    return (
        <div className='bg-[#F5F5F3] py-[60px]'>
            <Container>
                <div className='lg:flex justify-between'>
                    <div className='lg:w-4/12 flex justify-between'>
                        <div className=''>
                            <ul>
                                <li className='font-dm font-bold text-[16px]'>MENU</li>
                                <li className='text-[#6D6D6D] text-[14px] font-dm pt-[10px]'>Home</li>
                                <li className='text-[#6D6D6D] text-[14px] font-dm'>Shop</li>
                                <li className='text-[#6D6D6D] text-[14px] font-dm'>About</li>
                                <li className='text-[#6D6D6D] text-[14px] font-dm'>Contact</li>
                                <li className='text-[#6D6D6D] text-[14px] font-dm'>Journal</li>
                            </ul>
                        </div>
                        <div className=''>
                            <ul>
                                <li className='font-dm font-bold text-[16px]'>SHOP</li>
                                <li className='text-[#6D6D6D] text-[14px] font-dm pt-[10px]'>Category 1</li>
                                <li className='text-[#6D6D6D] text-[14px] font-dm'>Category 2</li>
                                <li className='text-[#6D6D6D] text-[14px] font-dm'>Category 3</li>
                                <li className='text-[#6D6D6D] text-[14px] font-dm'>Category 4</li>
                                <li className='text-[#6D6D6D] text-[14px] font-dm'>Category 5</li>
                            </ul>
                        </div>
                        <div className=''>
                            <ul>
                                <li className='font-dm font-bold text-[16px]'>HELP</li>
                                <li className='text-[#6D6D6D] text-[14px] font-dm pt-[10px]'>Privacy Policy</li>
                                <li className='text-[#6D6D6D] text-[14px] font-dm'>Terms & Conditions</li>
                                <li className='text-[#6D6D6D] text-[14px] font-dm'>Special E-shop</li>
                                <li className='text-[#6D6D6D] text-[14px] font-dm'>Shipping</li>
                                <li className='text-[#6D6D6D] text-[14px] font-dm'>Secure Payments</li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-2/12'>
                        <h2 className='font-dm text-[16px] font-bold'>(052) 611-5711</h2>
                        <h2 className='font-dm text-[16px] font-bold'>company@domain.com</h2>
                    </div>
                    <div className='w-3/12'>
                        <img src={nav}></img>
                    </div>
                </div>
                <div className='flex justify-between pt-[50px]'>
                    <div className='w-1/12 flex justify-between'>
                        <FaFacebookF />
                        <FaLinkedinIn />
                        <CiInstagram />
                    </div>
                    <div className='w-3/12'>
                        <h2 className='text-[#6D6D6D] text-[11px] font-dm'>2020 Orebi Minimal eCommerce Figma Template by Adveits</h2>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer