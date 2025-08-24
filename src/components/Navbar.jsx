import React, { useState } from 'react'
import Container from './Container'
import nav from "../assets/nav.png"
import { FaBarsStaggered } from 'react-icons/fa6'
import { RxCross1 } from 'react-icons/rx'
import { Link } from 'react-router-dom'

function Navbar() {
    let [show,setShow]=useState(false)
    return (
        <div className='py-5 bg-[#FFFFFF]'>
            <Container>
                <div className='lg:flex items-center'>
                    <div className='w-4/12 relative'>
                        <img src={nav}></img>
                    </div>
                    <div className='lg:w-8/12'>
                        <ul className={`lg:flex pt-5 lg:pt-0 text-center lg:bg-transparent gap-[40px] duration-300 ease-in-out
                         ${show==true?"bg-[#D8D8D8] ":
                             "mt-[-200px] lg:mt-0"}`}>
                            <li className='font-[14px] text-[#767676] font-dm hover:text-[#262626]'>
                                <Link to="/">Home</Link>
                            </li>
                            <li className='font-[14px] text-[#767676] font-dm hover:text-[#262626]'>
                                <Link to="/shop">Shop</Link>
                            </li>
                            <li className='font-[14px] text-[#767676] font-dm hover:text-[#262626]'>About</li>
                            <li className='font-[14px] text-[#767676] font-dm hover:text-[#262626]'>Contacts</li>
                            <li className='font-[14px] text-[#767676] font-dm hover:text-[#262626]'>Journal</li>
                        </ul>
                    </div>
                    <div className='lg:hidden absolute top-[15px] right-2' onClick={()=>setShow(!show)}>
                        {show?  <RxCross1/>:<FaBarsStaggered/>}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar