import React from 'react'
import {IoIosArrowForward} from 'react-icons/io';
import { useRouter } from "next/router";
const Services = () => {
    const router = useRouter();
    const handleClassClick = (id) => {
        router.push(`/course/${id}`);
      };
    const service=[
        {
            id:1,
            img:'/assets/ux.svg',
            title:'Basic',
            sub:'Lessons on design that cover the most recent developments.'
        },
        {
            id:3,
            img:'/assets/web.svg',
            title:'Web  Development',
            sub:'Lessons on design that cover then most recent developments.'
        },
        {
            id:2,
            img:'/assets/market.svg',
            title:'Placement Program',
            sub:'Lessons on design that cover then most recent developments.'
        },
        {
            id:4,
            img:'/assets/market.svg',
            title:'Android Development',
            sub:'Lessons on design that cover then most recent developments.'
        },
        { 
            id:5,
            img:'/assets/market.svg',
            title:'Cloud Computing',
            sub:'Lessons on design that cover then most recent developments.'
        },
        {
            id:6,
            img:'/assets/market.svg',
            title:'Artificial Intelligence and Machine Learning',
            sub:'Lessons on design that cover then most recent developments.'
        }
    ]
  return (
    <div className='container mx-auto items-center py-10'>
        <br /><br />
        <p className='text-lg text-purple-500 text-center font-medium'>Our services</p>
        <p className='text-3xl font-semibold text-center py-3'>Fostering a playful & engaging learning <br />
environment</p>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-16 pt-10">
{service.map((ser,i)=>{
    return(
        <div className='px-6 py-8 rounded-xl bg-gray-50 hover:bg-purple-600 group border border-gray-300' key={i}>
            <div className="flex gap-3 items-center">
            <img src={ser.img} alt="services" />
            <p className='text-2xl group-hover:text-white font-semibold '>{ser.title}</p>
            </div>
           
            <p className='text-base group-hover:text-white pr-6 py-2'>{ser.sub}</p>
            <button className='flex gap-2 items-center text-purple-600 group-hover:text-white' onClick={() => handleClassClick(ser.id)}>Learn More <IoIosArrowForward/> </button>
        </div>
    )
})}
</div>
    </div>
  )
}

export default Services