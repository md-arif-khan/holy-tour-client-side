import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const UserReviewItem = ({review,setPersonalReview,personalReview}) => {
    const  {name,photo,_id}=review;
    const {user}=useContext(AuthContext)
    const handleDelete=id=>{
        const proceed=window.confirm('Are You sure Delete?')
        if(proceed){
            fetch(`https://holy-tour-server.vercel.app/review/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
               if(data.deletedCount>0){
                alert('Delete successfully')
                const remaing=personalReview.filter(review=>review._id !== id)
                setPersonalReview(remaing)

               }
            })
        }
    }
   
    return (
       
            <tr>
        <th>
          
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={user?.photoURL}alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              
            </div>
          </div>
        </td>
        <td>
          
          <br/>
          <span className="badge badge-ghost badge-sm">{review.message}</span>
        </td>
        <td> <button onClick={()=>handleDelete(_id)} className="btn btn-primary btn-sm">Delete</button></td>
        <th>
          <button className="btn btn-primary btn-sm"><Link to={`/update/${_id}`}>Update</Link></button>
        </th>
      </tr>
        
    );
};

export default UserReviewItem;