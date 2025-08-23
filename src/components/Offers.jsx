
import Container from './Container'
import off1 from "../assets/off1.png"
import off2 from "../assets/off2.png"
import off3 from "../assets/off3.png"
import off4 from "../assets/off4.png"


function Offers() {
    return (
        <div className='py-[100px]'>
            <Container>
                <div className='text-[39px] font-bold font-dm'>Special Offers</div>
                <div className='pt-10 flex justify-between flex-wrap'>
                        <div className='lg:w-3/12 w-6/12 pr-4 relative'>
                                <img src={off1}></img>
                            <h1 className='top-[20px] left-[20px] absolute py-[7px] px-[20px] bg-[#262626] text-[#FFFFFF] font-dm '>New</h1>
                            <div className='flex justify-between items-center pt-4'>
                                <h2 className='text-[18px] font-dm font-medium'>Basic Crew  Neck Tee</h2>
                                <p className='text-[14px] text-[#767676] font-dm'>$44.00</p>
                            </div>
                            <p className='text-[14px] text-[#767676] font-dm pt-3'>Black</p>
                        </div>
                              <div className='lg:w-3/12 w-6/12 pr-4 relative'>
                                <img src={off2}></img>
                            <h1 className='top-[20px] left-[20px] absolute py-[7px] px-[20px] bg-[#262626] text-[#FFFFFF] font-dm '>New</h1>
                            <div className='flex justify-between items-center pt-4'>
                                <h2 className='text-[18px] font-dm font-medium'>Basic Crew  Neck Tee</h2>
                                <p className='text-[14px] text-[#767676] font-dm'>$44.00</p>
                            </div>
                            <p className='text-[14px] text-[#767676] font-dm pt-3'>Black</p>
                        </div>
                            <div className='lg:w-3/12 w-6/12 pr-4 relative'>
                                <img src={off3}></img>
                            <h1 className='top-[20px] left-[20px] absolute py-[7px] px-[20px] bg-[#262626] text-[#FFFFFF] font-dm '>New</h1>
                            <div className='flex justify-between items-center pt-4'>
                                <h2 className='text-[18px] font-dm font-medium'>Basic Crew  Neck Tee</h2>
                                <p className='text-[14px] text-[#767676] font-dm'>$44.00</p>
                            </div>
                            <p className='text-[14px] text-[#767676] font-dm pt-3'>Black</p>
                        </div>
                              <div className='lg:w-3/12 w-6/12 pr-4 relative'>
                                <img src={off4}></img>
                            <h1 className='top-[20px] left-[20px] absolute py-[7px] px-[20px] bg-[#262626] text-[#FFFFFF] font-dm '>New</h1>
                            <div className='flex justify-between items-center pt-4'>
                                <h2 className='text-[18px] font-dm font-medium'>Basic Crew  Neck Tee</h2>
                                <p className='text-[14px] text-[#767676] font-dm'>$44.00</p>
                            </div>
                            <p className='text-[14px] text-[#767676] font-dm pt-3'>Black</p>
                        </div>
                </div>
            </Container>
        </div>
    )
}

export default Offers