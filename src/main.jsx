/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
}  from "react-router-dom";
import Dashboard from './pages/Dashboard.jsx';
const Layout = () => {
  return(
    <div>
     <Outlet/> 
     
    </div>
  
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
          path:"/",
          element:  <App/> 
      },
     
  {
    path:"/admin",
    element:<Dashboard/>
},

//  {
//    path:"/dashboard",
//    element:<Dashboard/>
// },
//       {
//        path:"/post/:id",
//        element:<Post/>
//    },

    ]
  },
 
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
