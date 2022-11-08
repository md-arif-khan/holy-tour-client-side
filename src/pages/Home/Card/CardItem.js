import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const CardItem = ({service}) => {
    const {name,picture,price,decription,_id}=service;
    console.log(_id)
    return (
        <div className="card  bg-base-100 shadow-xl">
        <figure>
        <PhotoProvider>
        <PhotoView src={picture}>
          <img src={picture} alt="services" />
          </PhotoView>
         </PhotoProvider>
          </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-dark">Price: ${price}</div>
          </h2>
          <p>{decription.length>100?decription.slice(0,100):decription}...</p>
          <div className="card-actions justify-end">
            
            <div className="badge badge-outline text-xl p-4 font-semibold"><Link to={`/details/${_id}`}>Details</Link></div>
          </div>
        </div>
      </div>
    );
};

export default CardItem;