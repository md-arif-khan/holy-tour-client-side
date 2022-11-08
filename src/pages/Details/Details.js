import React from "react";
import { useLoaderData } from "react-router-dom";
import { StarIcon } from '@heroicons/react/24/solid'
const Details = () => {
  const data = useLoaderData();
  const {
    picture,
    name,
    rating,
    country,
    date,
    decription,
    duration,
    price,
    ratting,
    _id,
  } = data;
  console.log(data);
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 max-w-6xl mx-auto gap-6 border p-3 mt-8 mb-8">
      <div className="flex md:justify-center">
            <img src={picture} alt="" />
      </div>
      <div>
        <h1 className="text-4xl font-bold mt-4 mb-6">{name}</h1>
        <p>{decription}</p>
        <div className="flex justify-between mt-8">
          <button className="btn no-animation md:text-lg bg-[#570DF8]">Price: ${price}</button>
          <button className="btn no-animation md:text-lg bg-[#570DF8]">{ratting} <StarIcon className="h-6 w-6 text-orange-500"/></button>
          <button className="btn no-animation md:text-lg hidden sm:block bg-[#570DF8]">{country}</button>
          
        </div>
      </div>
    </div>
  );
};

export default Details;
