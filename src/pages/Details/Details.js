import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { StarIcon } from "@heroicons/react/24/solid";
import Review from "./ReviewField";
import ReviewField from "./ReviewField";
import useTitle from "../../hooks/useTitle";
const Details = () => {
  const [review,setReview]=useState([])
  const data = useLoaderData();
  useTitle('Details')
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
  useEffect(()=>{
    fetch(`https://holy-tour-server.vercel.app/review/${_id}`)
    .then(res=>res.json())
    .then(data=>setReview(data))
  },[])
  return (
    <div>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 max-w-6xl mx-auto gap-6 border p-3 mt-8 mb-8">
        <div className="flex md:justify-center">
          <img src={picture} alt="" />
        </div>
        <div>
          <h1 className="text-4xl font-bold mt-4 mb-6">{name}</h1>
          <p>{decription}</p>
          <div className="flex justify-between mt-8">
            <button className="btn no-animation md:text-lg bg-[#570DF8]">
              Price: ${price}
            </button>
            <button className="btn no-animation md:text-lg bg-[#570DF8]">
              {ratting} <StarIcon className="h-6 w-6 text-orange-500" />
            </button>
            <button className="btn no-animation md:text-lg hidden sm:block bg-[#570DF8]">
              {country}
            </button>
          </div>
        </div>
      </div>
      {/* review start */}
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-md px-4 md:px-8 mx-auto">
          <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8 xl:mb-12">
            Customer Reviews
          </h2>

          <div class="flex justify-between items-center border-t border-b py-4 mb-4">
            <div class="flex flex-col gap-0.5">
              <span class="block font-bold">Total</span>

              <div class="flex gap-0.5 -ml-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 text-gray-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>

              <span class="block text-gray-500 text-sm">
                Bases on {review?.length} reviews 
              </span>
            </div>

            <Link
              to={`/postReview/${_id}`}
              class="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3"
            >
              Write a review
            </Link>
          </div>

          <div class="divide-y">

            {
              review.map(rev=><ReviewField key={rev._id} rev={rev}></ReviewField>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
