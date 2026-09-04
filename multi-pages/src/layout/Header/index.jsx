import { NavLink,useNavigate } from "react-router"
import { useAuth } from "../../context/AuthContext"

export const Header = () => {

    const {user,logout} = useAuth()
    const navigate = useNavigate()

    const handleLogout = ()=>{
        logout()
        navigate("/")
    }

    return (
        <>
            <header className="flex items-center justify-between p-4 bg-gray-200">
                <nav className="py-2 space-x-3">
                    <NavLink
                        to="/"
                        className={({isActive}) =>
                            isActive ? "text-blue-600 font-bold" : "text-gray-800"
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/sobre"
                        className={({isActive}) =>
                            isActive ? "text-blue-600 font-bold" : "text-gray-800"
                        }
                    >
                        Sobre
                    </NavLink>


                     <NavLink
                        to="/blog"
                        className={({isActive}) =>
                            isActive ? "text-blue-600 font-bold" : "text-gray-800"
                        }
                    >
                        Blog
                    </NavLink>
                </nav>

                <div>
                    {
                    user ? (
                        <>
                            <span className="mr-4">Olá, {user.email}</span>
                            <button onClick={handleLogout} className="bg-red-500 text-white px-3 py-1 rounded">Logout</button>
                        </>
                    ):(
                       <NavLink
                        to="/login" className="bg-blue-600 text-white px-3 py-1 rounded"
                       >
                        Login
                       </NavLink>
                    )
                    
                    }
                </div>
            </header>

        </>
    )
}