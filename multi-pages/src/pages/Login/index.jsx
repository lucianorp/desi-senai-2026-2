import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";

const Login = ()=>{

    const [email, setEmail] = useState("")
    const {login} = useAuth()
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        login(email)
        navigate("/")
    }

    return(
        <div className="flex items-center justify-center min-h-screen">
            <form onSubmit={handleSubmit} className="p-6 border rounded shadow-md">
                <h2 className="text-xl font-bold">Login</h2>

                <input
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    required
                    className="w-full px-3 py-2 border rounded mt-2"
                />

                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-800 mt-4 cursor-pointer">
                    Entrar
                </button>


            </form>
        </div>
    )
}

export default Login