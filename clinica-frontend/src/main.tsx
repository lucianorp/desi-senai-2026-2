import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from "react-toastify"
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import MedicalRecordList from './components/MedicalRecordList';
import RegisterFormPatient from './components/RegisterFormPatient';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/prontuarios", element: <MedicalRecordList /> },
      { path: "/pacientes", element: <RegisterFormPatient /> },
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastContainer />
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
