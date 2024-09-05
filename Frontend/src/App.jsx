import React from 'react';
import Welcome from './component/Welcome';
import Register from './component/Register';
import Login from './component/Login';
import Verify from './component/Verify';
import Notification from './component/Notification';
import Home from './component/Home';

import LocomotiveScroll from 'locomotive-scroll';
import {createBrowserRouter,RouterProvider} from "react-router-dom";

function App() {

  const locomotiveScroll = new LocomotiveScroll();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Welcome /></>,
    },{
      path: "/Welcome",
      element: <><Welcome /></>,
    },
    {
      path: "/Register",
      element: <><Register/></>,
    },
    {
      path: "/Login",
      element: <><Login/></>,
    },
    {
      path: "/Verify",
      element: <><Verify/></>,
    },
    {
      path: "/Notification",
      element: <><Notification/></>,
    },
    {
      path: "/Home",
      element: <><Home/></>,
    },
  ]);

  return (
    <div className='w-full min-h-screen bg-[#F1F1F1] text-black'>
        <RouterProvider router={router} />
    </div>
    
  )
}

export default App