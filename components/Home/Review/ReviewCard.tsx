import React from 'react'
import {FaQuoteLeft, FaStar} from "react-icons/fa";
import Image from 'next/image';
 type Props={
    name:string;
    image:string;
 }
export const ReviewCard = ({image,name}:Props) => {
  return (
    <div className='w-full lg:w-[90%] relative mx-auto p-6 bg-white shadow-lg rounded-lg'>
        <div>
            <FaQuoteLeft className="w-14 h-14 opacity-10 absolute top-8"  /></div>
            <div className='grid grid-cols-1 lg:grid-cols-5 gap-6 items-center'>
                <div className='col-span-3 order-2 lg:order-1'>
                    <p className='mt-8 text-sm sm:text-base md:text-lg font-medium leading-[1.5rem] sm:leading-[1.8rem]
                    md:leading-[2.5rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem numquam sunt voluptatibus itaque asperiores nobis nam ut ipsam placeat
                     saepe enim ullam omnis amet rem esse voluptatum, laudantium, explicabo fugit.</p>
                     <div className='flex items-center mt-6'>
       
                 <FaStar className='text-yellow-600 w-6 h-6'/>
                 <FaStar className='text-yellow-600 w-6 h-6'/>
                 <FaStar className='text-yellow-600 w-6 h-6'/>
                 <FaStar className='text-yellow-600 w-6 h-6'/>
                 <FaStar className='text-yellow-600 w-6 h-6'/>
                     </div>
                     <h1 className='text-xl font-semibold mt-8'>{name}</h1>
                     <p className='mt-2 text-lg text-gray-600 font-medium mb-6'> Full Stack Web Developer</p>

                </div>
                <div className='col-span-2 mx-auto order-1 lg:order-2'>
                    <Image src={image} alt={name} width={250} height={120} className='rounded-full'/>
                </div>
            </div>
        </div>
    
  );
};
export default ReviewCard;