import React from 'react';
import bg from '../../images/bokeh-cover-bg.jpg'
import './AddService.css'
const AddService = () => {
    
// name
// "GRAND TURKEY"
// country
// "TURKEY"
// ratting
// 4.5
// price
// 2000
// decription
// "dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis…"
// picture
// "https://i.ibb.co/VSRPqqB/tour-photos-bursa-grand-mosque-1500x1000.jpg"
// date
// "16 DEC - 23 DEC"
// duration
// "8 days"
// avable
// 20
const handleAddService=event=>{
    event.preventDefault()
    const form=event.target
    const name=form.name.value
    const country=form.country.value
    const ratting=form.ratting.value
    const price=form.price.value
    const picture=form.picture.value
    const date=form.date.value
    const duration=form.duration.value
    const avable=form.avable.value
    const decription=form.decription.value
    const newService={
        name,
        country,
        ratting,
        price,
        picture,
        date,
        duration,
        avable,
        decription
    }
    fetch('http://localhost:5000/addservice',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(newService)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.acknowledged){
            alert('New Service Added')
        }
    })
}
    return (
       <div className=' bg-image'>
        
             <section className="p-6 dark:bg-gray-800">
             <h1 className='text-center text-5xl text-white'>Add Services</h1>
	<form onSubmit={handleAddService} novalidate="" action="" className="text-black text-xl container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium"></p>
				<p className="text-xs"></p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label for="firstname" className="text-sm text-white">Name</label>
					<input name='name' id="firstname" type="text" placeholder="Service Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="lastname" className="text-sm text-white">Country</label>
					<input name='country'  id="lastname" type="text" placeholder="Country" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="email" className="text-sm text-white">Ratting</label>
					<input name='ratting' id="email" type="email" placeholder="Ratting" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full">
					<label for="address" className="text-sm text-white">Price</label>
					<input name='price' id="address" type="text" placeholder="Price" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label for="city" className="text-sm text-white">Picture</label>
					<input name='picture' id="city" type="text" placeholder="PhotoURL" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label for="state" className="text-sm text-white">Date</label>
					<input name='date' id="state" type="text" placeholder="Date" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label for="zip" className="text-sm text-white">Duration</label>
					<input name='duration' id="zip" type="text" placeholder="duration" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
			</div>
		</fieldset>
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium"></p>
				<p className="text-xs"></p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label for="username" className="text-sm text-white">Avable</label>
					<input name='avable' id="username" type="text" placeholder="avable" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				
				<div className="col-span-full">
					<label for="bio" className="text-sm text-white">Decription</label>
					<textarea name='decription' id="bio" placeholder="Decription" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"></textarea>
				</div>
				
			</div>
            
		</fieldset>
                   <div className="flex items-center space-x-2 justify-center">
						<input className='btn btn-primary' type="submit" value="Add Service" />
					</div>
	</form>
       </section>
       </div>
    );
};

export default AddService;