import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

const SignUp = () => {
  const {signUp,updateName,user}=useContext(AuthContext)
  const handleCreateUser=event=>{
      event.preventDefault()
      const form=event.target;
      const name=form.name.value;
      const email=form.email.value;
      const password=form.password.value;
      signUp(email,password)
      .then(result=>{
        const user=result.user;
        alert('user created successfullly')
        form.reset()
        updateName({displayName:name})
          .then(()=>{})
          .catch(err=>console.log(err))
          console.log(user)
      })
      .catch(err=>console.log(err))
      
     
  }
    return (
        <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">Register</h2>

    <form onSubmit={handleCreateUser} class="max-w-lg border rounded-lg mx-auto">
      <div class="flex flex-col gap-4 p-4 md:p-8">
        <div>
          <label for="name" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Name</label>
          <input placeholder='Your Name' name="name" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
        </div>
        <div>
          <label  for="email" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Email</label>
          <input placeholder='Your Email' name="email" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
        </div>
        <div>
          <label for="password" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Password</label>
          <input placeholder='Your Password' type='password' name="password" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
        </div>

        <button class="block bg-gray-800 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Sign Up</button>

        <div class="flex justify-center items-center relative">
          <span class="h-px bg-gray-300 absolute inset-x-0"></span>
          <span class="bg-white text-gray-400 text-sm relative px-4">Log in with social</span>
        </div>

        

        
      </div>

      <div class="flex justify-center items-center bg-gray-100 p-4">
        <p class="text-gray-500 text-sm text-center">Already have an account? <Link to='/login' class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 transition duration-100">Login</Link></p>
      </div>
    </form>
  </div>
</div>
    );
};

export default SignUp;