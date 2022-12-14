import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardItem from './CardItem';

const Card = () => {
    const [services,setServices]=useState([])
   useEffect(()=>{
     fetch('https://holy-tour-server.vercel.app/services')
     .then(res=>res.json())
     .then(data=>setServices(data))
   },[])
    return (
        <div>
            {
                services.length>0?<div className='mt-12 mb-12'>
                <h1 className='text-center text-6xl font-bold mb-10'>Our <span className='text-[#570DF8]'>Services</span></h1>
                <div className='lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-6 max-w-6xl mx-auto'> 
                    {
                        services.map(service=><CardItem key={service._id} service={service}></CardItem>)
                    }
                </div>
                    <div className='flex justify-center mt-6'>
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-[#570DF8]"><Link to='/totalCard'>See More</Link></button>
                    </div>
            </div>:<div className='flex justify-center mt-10 mb-10'><div className="w-16 h-16 bg-[green]  border-4 border-dashed rounded-full animate-spin  dark:border-red-600"></div></div>
            }
        </div>
    );
};

export default Card;