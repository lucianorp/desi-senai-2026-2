import { Navigate } from "react-router";

import type { ReactNode } from "react";

import { useAuth } from "../../context/AuthContext";

import { toast } from "react-toastify"


interface PrivateRouteProps {
    children: ReactNode
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const { user } = useAuth()

    if (!user) {
        console.log("Usuário não autenticado. Redirecionando")

        // setTimeout(() => {
        //     toast.error("Usuário não autenticado. Redirecionando")
        // }, 50)

        return <Navigate to="/" replace />
    }

    return children

}

export default PrivateRoute