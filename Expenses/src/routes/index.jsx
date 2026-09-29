import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import Transaction from '../pages/transactions';
import Layout from '../pages/layout';
import { Children } from 'react';
import Login from '../pages/login';
import Signup from '../pages/signup';
import Display from '../pages/display';

const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
        {
            path:'/Dashboard',
            element:<Dashboard/>,
        },
        {
            path:'/',
            element:<Display/>
        },
        {
            path:'/Transaction',
            element:<Transaction/>,
        },
        {
            path:'/Login',
            element:<Login/>
        },
        {
            path:'Signup',
            element:<Signup/>
        }
    ]
}
])

export default router;