'use client';
import React, { useEffect } from 'react'
import { Hero } from './Hero/Hero';
import { WhyChoose } from './WhyChoose/WhyChoose';
import { AnalyticsFeatures } from './AnalyticsFeatures/AnalyticsFeatures';
import {Feature} from './Feature/Feature';
import {Review} from './Review/Review';
import Price from './Price/Price';
import Offer from './Offer/Offer';
import AOS from 'aos';
import 'aos/dist/aos.css';


export const Home = () => {
    useEffect(()=>{
        const initAOS = async ()=>{
            await import("aos");
            AOS.init ({
                duration:1000,
                easing: "ease",
                once:true,
                anchorPlacement:"top-bottom",

            });
        };
        initAOS();
 },[]);
  return (
    <div className='overflow-hidden '>
    <Hero/>
    <WhyChoose/>
    <AnalyticsFeatures/>
    <Feature/>
    <Review/> 
    <Price/>
    <Offer/>
   </div>
  )
}
export default Home;