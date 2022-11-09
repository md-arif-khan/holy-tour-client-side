import { Declaration } from 'postcss';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Login from '../Login/Login';
import Blog from '../pages/Blog/Blog';
import Details from '../pages/Details/Details';
import Home from '../pages/Home/Home/Home';
import TotalCard from '../pages/TotalCard/TotalCard';
import PostReview from '../PostReview/PostReview';
import SignUp from '../SignUp/SignUp';
import PrivateRoute from './PrivateRoute';


export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/totalCard',
                element:<TotalCard></TotalCard>
            },
            {
                path:'/details/:id',
                element:<Details></Details>,
                loader:({params})=>fetch(`http://localhost:5000/cardDetails/${params.id}`),
            },
            {
                path:'/login',
                element:<Login></Login>,
               
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>,
               
            },
            {
                path:'/postReview/:id',
                loader:({params})=>fetch(`http://localhost:5000/cardDetails/${params.id}`),
                element:<PrivateRoute><PostReview></PostReview></PrivateRoute>
               
            }
        ]
    }
])