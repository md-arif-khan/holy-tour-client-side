import React from 'react';

const Feature = () => {
    return (
        <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
	<div className="container p-4 mx-auto sm:p-10">
		<div className="mb-12 space-y-4 text-center">
			<h1 className="text-4xl font-semibold leading-tight">Pricing</h1>
			<p className="px-4 sm:px-8 lg:px-24">Tourism Pricing Problems And How To Avoid Them</p>
			<div>
				<button className="px-4 py-1 font-semibold border rounded-l-lg dark:bg-violet-400 dark:border-violet-400 dark:text-gray-900">Monthly</button>
				<button className="px-4 py-1 border rounded-r-lg dark:border-violet-400">Annually</button>
			</div>
		</div>
		<div className="grid max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr lg:grid-cols-3 lg:max-w-full">
			<div className="flex flex-col overflow-hidden border-2 rounded-md dark:border-gray-700">
				<div className="flex flex-col items-center justify-center px-2 py-8 space-y-4 dark:bg-gray-800">
					<p className="text-lg font-medium">Single Tour</p>
					<p className="text-5xl font-bold">500€
						<span className="text-xl dark:text-gray-400"> /8 days</span>
					</p>
				</div>
				<div className="flex flex-col items-center justify-center px-2 py-8 dark:bg-gray-900">
					<ul className="self-stretch flex-1 space-y-2">
						<li className="flex justify-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-violet-400">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
							</svg>
							<span>Dhaka, Bangladesh</span>
						</li>
						<li className="flex justify-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-violet-400">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
							</svg>
							<span>Kathmandu, Nepal</span>
						</li>
						
					</ul>
					
				</div>
			</div>
			<div className="flex flex-col overflow-hidden border-2 rounded-md dark:border-violet-400">
				<div className="flex flex-col items-center justify-center px-2 py-8 space-y-4 dark:bg-gray-800">
					<p className="text-lg font-medium">Family Tour</p>
					<p className="text-5xl font-bold">1000€
						<span className="text-xl dark:text-gray-400"> /10 days</span>
					</p>
				</div>
				<div className="flex flex-col items-center justify-center px-2 py-8 dark:bg-gray-900">
					<ul className="self-stretch flex-1 space-y-2">
						<li className="flex justify-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-violet-400">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
							</svg>
							<span>London, United kingdom</span>
						</li>
						<li className="flex justify-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-violet-400">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
							</svg>
							<span>	Los Angeles, United State</span>
						</li>
						
					</ul>
					
				</div>
			</div>
			<div className="flex flex-col overflow-hidden border-2 rounded-md dark:border-gray-700">
				<div className="flex flex-col items-center justify-center px-2 py-8 space-y-4 dark:bg-gray-800">
					<p className="text-lg font-medium">Business Tour</p>
					<p className="text-5xl font-bold">2000€
						<span className="text-xl dark:text-gray-400"> /25 days</span>
					</p>
				</div>
				<div className="flex flex-col items-center justify-center px-2 py-8 dark:bg-gray-900">
					<ul className="self-stretch flex-1 space-y-2">
						<li className="flex justify-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-violet-400">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
							</svg>
							<span>Armstrong, Canada</span>
						</li>
						<li className="flex justify-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-violet-400">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
							</svg>
							<span>Andalusia, Spain</span>
						</li>
						
					</ul>
					
				</div>
			</div>
		</div>
	</div>
</section>
    );
};

export default Feature;