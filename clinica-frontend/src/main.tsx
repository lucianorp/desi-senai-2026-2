import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer} from "react-toastify"
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastContainer/>
    <RouterProvider router={router} />
  </StrictMode>,
)
