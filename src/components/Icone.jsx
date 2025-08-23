import React from 'react'
import { RiNumber2 } from 'react-icons/ri'
import Container from './Container'
import { FaCaravan } from 'react-icons/fa6'
import { SlReload } from 'react-icons/sl'

function Icone() {
    return (
        <div className='pt-2 pb-3 border-b-2 border-[#F0F0F0]'>
            <Container>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <RiNumber2 />
                        <p className='pl-2 text-[#6D6D6D] text-[14px] font-dm'>Two years warranty</p>
                    </div>
                    <div className='flex items-center'>
                        <FaCaravan/>
                        <p className='pl-2 text-[#6D6D6D] text-[14px] font-dm'>Free shipping</p>
                    </div>
                    <div className='flex items-center'>
                        <SlReload/>
                        <p className='pl-2 text-[#6D6D6D] text-[14px] font-dm'>Return policy in 30 days</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Icone