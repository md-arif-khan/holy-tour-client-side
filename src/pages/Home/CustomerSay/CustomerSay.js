import React from 'react';

const CustomerSay = () => {
    return (
        <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
    <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-8 md:mb-12">What others say about us</h2>

    <div class="grid md:grid-cols-2 gap-4 md:gap-8">
     
      <div class="flex flex-col items-center bg-indigo-500 rounded-lg gap-4 md:gap-6 px-8 py-6">
        <div class="max-w-md text-white lg:text-lg text-center">“Very Good Service brings together companies which have won awards for their good customer service or have gained recognition for the quality of their.”</div>

        <div class="flex flex-col sm:flex-row items-center gap-2 md:gap-3">
          <div class="w-12 md:w-14 h-12 md:h-14 bg-gray-100 border-2 border-indigo-100 rounded-full overflow-hidden">
            <img src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112" loading="lazy" alt="Photo by Radu Florin" class="w-full h-full object-cover object-center" />
          </div>

          <div>
            <div class="text-indigo-50 text-sm md:text-base font-bold text-center sm:text-left">John McCulling</div>
            <p class="text-indigo-200 text-sm md:text-sm text-center sm:text-left">CEO / Datadrift</p>
          </div>
        </div>
      </div>
      
      <div class="flex flex-col items-center bg-indigo-500 rounded-lg gap-4 md:gap-6 px-8 py-6">
        <div class="max-w-md text-white lg:text-lg text-center">“There is a nice, buzzy atmosphere and good service. The Sun · The spending of older people is twice as likely to be influenced.”</div>

        <div class="flex flex-col sm:flex-row items-center gap-2 md:gap-3">
          <div class="w-12 md:w-14 h-12 md:h-14 bg-gray-100 border-2 border-indigo-100 rounded-full overflow-hidden">
            <img src="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112" loading="lazy" alt="Photo by christian ferrer" class="w-full h-full object-cover object-center" />
          </div>

          <div>
            <div class="text-indigo-50 text-sm md:text-base font-bold text-center sm:text-left">Kate Berg</div>
            <p class="text-indigo-200 text-sm md:text-sm text-center sm:text-left">CFO / Dashdash</p>
          </div>
        </div>
      </div>
     
    </div>
  </div>
</div>
    );
};

export default CustomerSay;