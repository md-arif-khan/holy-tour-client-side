import React from "react";
import img1 from "../../../images/img1.jpg";
import img2 from "../../../images/img2.jpg";
import img3 from "../../../images/img3.jpg";
const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-screen">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <div class="grid grid-cols-5 w-full ">
             
              <div className="col-span-1 flex items-center">
              <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
              </div>
              <div  className="col-span-3">
                    <div className="flex justify-center text-white">
                        <div>
                        <h3 className="text-center text-xl font-bold">City in France</h3>
                    <h1 className="text-center text-6xl font-bold mt-4 mb-4">Marseille</h1>
                    <p className="text-center text-[20px] font-bold">Tours is a university town between France's Cher and Loire rivers. Once a Gallic-Roman settlement, today it's a university town and a traditional gateway for exploring the chateaux of the Loire Valley region.</p>
                        </div>
                    </div>

              </div>
              <div className="col-span-1 flex justify-end items-center">
              <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
              </div>
              </div>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full" />
          <div className=" absolute flex justify-cener transform -translate-y-1/2 left-5 right-5 top-1/2">
            <div class="grid grid-cols-5 w-full ">
             
              <div className="col-span-1 flex items-center">
              <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
              </div>
              <div  className="col-span-3">
                    <div className="flex justify-center text-white">
                        <div>
                        <h3 className="text-center text-xl font-bold">United States cities</h3>
                    <h1 className="text-center text-6xl font-bold mt-4 mb-4">Los Angeles</h1>
                    <p className="text-center text-[18px] font-semibold">Safe and Secure. Find Los Angeles Apartments. Easy to Access. Simple to Use. Fast and Trustworthy. All the Answers. Multiple Sources Combined. Discover Us Now. Types: Video, Images, Web, Wiki, News.</p>
                        </div>
                    </div>

              </div>
              <div className="col-span-1 flex justify-end items-center">
              <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
              </div>
              </div>
              
          
           
            
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <div class="grid grid-cols-5 w-full ">
             
             <div className="col-span-1 flex items-center">
             <a href="#slide2" className="btn btn-circle">
             ❮
           </a>
             </div>
             <div  className="col-span-3">
                   <div className="flex justify-center text-white">
                       <div>
                       <h3 className="text-center text-xl font-bold">Canada</h3>
                   <h1 className="text-center text-6xl font-bold mt-4 mb-4">Northwest Territories</h1>
                   <p className="text-center text-[18px] font-semibold">The Northwest Territories of Canada include the regions of Dehcho, North Slave, Sahtu, South Slave and Inuvik. Their remote landscape encompasses forest, mountains, Arctic tundra and islands in the Canadian Arctic Archipelago. Dehcho's Nahanni National Park</p>
                       </div>
                   </div>

             </div>
             <div className="col-span-1 flex justify-end items-center">
             <a href="#slide1" className="btn btn-circle">
             ❯
           </a>
             </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
