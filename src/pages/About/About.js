import React from 'react';

const About = () => {
    return (
        <section class="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32">
    <div class="absolute inset-0">
        <img class="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/5/girl-working-on-laptop.jpg" alt="" />
    </div>

    <div class="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

    <div class="absolute inset-0 block bg-black/60 md:hidden"></div>

    <div class="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="text-center md:w-2/3 lg:w-1/2 xl:w-1/3 md:text-left">
            <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Our <span className='text-[#570DF8]'>Goal</span></h2>
            <p class="mt-4 text-base text-gray-200">Tourism Services means any service offered to tourists, such as, a service connected with accommodation, bus tours, taxis, tour guiding, vending, water sports, and food and beverage offered wholly or mainly to tourists</p>

            <form action="#" method="POST" class="mt-8 lg:mt-12">
                <div class="flex flex-col items-center sm:flex-row sm:justify-center">
                    <div class="flex-1 w-full min-w-0 px-4 sm:px-0">
                        <div class="relative text-gray-400 focus-within:text-gray-600">
                            <label for="email" class="sr-only"></label>
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                
                            </div>
                            
                        </div>
                    </div>

                   
                </div>
            </form>
        </div>
    </div>
</section>

    );
};

export default About;