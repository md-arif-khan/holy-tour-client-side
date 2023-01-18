import React from 'react';
import place1 from '../../../images/bangladesh-places-01-768x512.jpg.webp'
import place2 from '../../../images/bangladesh-places-04-768x512.jpg.webp'
const LatestPlace = () => {
    return (
        <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Latest Places
        </h1>



        <section class="mt-8 space-y-8 lg:mt-12">
            <section class="lg:flex lg:items-center">
                <div class="lg:w-1/2 ">
                    <p class="text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Old Dhaka</p>
                    <h2 class="mt-2 text-3xl font-semibold text-gray-800 capitalize lg:text-3xl mb-2 dark:text-white">Most Beautiful Places to Visit in Bangladesh</h2>
                    <p class="text-lg tracking-wider text-blue-500  dark:text-blue-400 mr-3">Oh, Old Dhaka! Sitting on the bank of the Buriganga River, Old Dhaka’s rich culture and heritage are reflected in both its architecture and the lifestyle of the city’s population. Dhaka is the capital of Bangladesh, and the southernmost region of the city is called Old Dhaka.</p>
                </div>

                <div class="mt-4 lg:w-1/2 lg:mt-0">
                    <img class="object-cover w-full h-64 rounded-lg md:h-96"
                        src={place1}
                        alt=""/>
                </div>
            </section>

            <section class="lg:flex lg:items-center">
                <div class="lg:w-1/2 ">
                    <p class="text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Sylhet</p>
                    <h2 class="mt-2 text-3xl font-semibold text-gray-800 capitalize lg:text-3xl mb-2 dark:text-white">Beautiful Plaes </h2>
                    <p class="text-lg tracking-wider text-blue-500 dark:text-blue-400 mr-3">Cast your eyes on a map of Bangladesh, and you’ll quickly be able to locate Sylhet in the eastern region. Not only is it one of the country’s greenest districts, it also has the highest amount of rainfall. </p>
                </div>

                <div class="mt-4 lg:w-1/2 lg:mt-0">
                    <img class="object-cover w-full h-64 rounded-lg md:h-96"
                        src={place2}
                        alt=""/>
                </div>
            </section>
        </section>
    </div>
</section>
    );
};

export default LatestPlace;