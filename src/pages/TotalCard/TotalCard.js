import React, { useEffect, useState } from 'react';
import CardItem from '../Home/Card/CardItem';

const TotalCard = () => {
    const [allData,setAllData]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/allData')
     .then(res=>res.json())
    .then(data=>setAllData(data))
    },[])
    return (
        <div className='mt-12 mb-12'>
        <h1 className='text-center text-6xl font-bold mb-10'>Our <span className='text-[#570DF8]'>Services</span></h1>
        <div className='lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-6 max-w-6xl mx-auto'> 
            {
                allData.map(service=><CardItem key={service._id} service={service}></CardItem>)
            }
        </div>
           
    </div>
    );
};

export default TotalCard;