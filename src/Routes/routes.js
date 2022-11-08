import { Declaration } from 'postcss';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Blog from '../pages/Blog/Blog';
import Details from '../pages/Details/Details';
import Home from '../pages/Home/Home/Home';
import TotalCard from '../pages/TotalCard/TotalCard';


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
            }
        ]
    }
])