import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer} from "react-toastify"
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    element:(
      <DashboardLayout/>
    ),
    children:[
      {path:"/dashboard",element:<Dashboard/>}
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastContainer/>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
