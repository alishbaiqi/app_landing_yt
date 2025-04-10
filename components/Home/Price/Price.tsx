import React from 'react'
import {PriceCard} from './PriceCard';

export const Price = () => {
  return (
    <div  className='pt-16 pb-16 bg-[#edfbff]'>
        <h2 className=' mt-6 text-2xl md:text-3xl apitalize font-bold text-center'>Meet Exciting Pricing Plans</h2>
        <div className='w-[90%] md-w-[80%] mt-20 mx-auto grid grid-cols lg:grid-cols-2 gap-10'>
        <div  data-aos="fade-up" data-aos-anchor-placement="top-center" >
    <PriceCard price={15} plan="starter"/>
    </div>
    <div  data-aos="fade-right" data-aos-anchor-placement="top-center "data-aos-delay="100">
    <PriceCard price={45} plan="bussines"/>
    </div>
    </div>
    </div>
  )
}
export default Price