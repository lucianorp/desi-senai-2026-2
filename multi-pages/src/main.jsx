import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Home } from './pages/Home';
import { Sobre } from './pages/Sobre';
import Main from './layout/Main';
import { Blog } from './pages/Blog';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "sobre", element: <Sobre /> },
      { path: "blog", element: <Blog /> },
    ]
  },
  {
    path: "login",
    element: <Login/>
  },
  // {
  //   path: "sobre",
  //   element: <Sobre/>
  // },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    {/* <App /> */}
  </StrictMode>,
)
