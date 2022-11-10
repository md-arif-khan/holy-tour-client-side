import React from 'react';

const Gallery = () => {
    return (
        <div>
            <section className="py-6 dark:bg-gray-800">
	<div className="container flex flex-col justify-center p-4 mx-auto">
        <h3 className='text-4xl font-bold text-center mb-4'>Best Place in Bangladesh</h3>
		<div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
			<img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://thesimpletravel.com/wp-content/uploads/2022/02/Somapura-Mahavihara.jpg" />
			<img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://www.revv.co.in/blogs/wp-content/uploads/2020/03/places-to-visit-in-west-india.jpg" />
			<img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://www.holidify.com/images/bgImages/PHUKET.jpg" />
			<img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://prod-media-eng.dhakatribune.com/uploads/2018/09/mehedi-hasan-11-1537039027134.jpg" />
		</div>
	</div>
</section>
        </div>
    );
};

export default Gallery;