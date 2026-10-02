import { useState } from "react";

import { Link,useNavigate } from "react-router";

import {
    MdDashboard,
    MdExitToApp,
    MdMenu,
    MdClose
} from "react-icons/md"

import {
    FaUserPlus,
    FaListAlt,
    FaCalendarCheck
} from "react-icons/fa"

import { useAuth } from "../../context/AuthContext";

const SideMenu = ()=>{
    const navigate = useNavigate()
    const {logout} = useAuth()

    const [isCollapsed, setIsCollapsed] = useState(false)

    const handleLogout = ():void =>{
        logout()
        navigate("/")
    }

    const toggleMenu = ():void =>{
        setIsCollapsed(!isCollapsed)
    }

    return(
        <aside className={`h-screen bg-cyan-800 text-white flex flex-col justify-between transition-all duration-300
            ${
                isCollapsed ? "w-16" : "w-64"
            }
        `}>

            {/* topo - botão toggle */}

            <div className="p-4 flex items-center justify-between border-b border-cyan-700">
                {
                    !isCollapsed && (
                        <h1 className="text-lg font-bold">
                            Clinica+
                        </h1>
                    )
                }

                <button
                    onClick={toggleMenu}
                    className="text-white hover:text-cyan-300 cursor-pointer"
                >
                    {
                        isCollapsed ?(
                            <MdMenu size={24}/>
                        ):(
                            <MdClose size={24}/>
                        )
                    }

                </button>
            </div>

            {/* Menu */}

            <nav className="flex p-4 space-y-4 overflow-y-auto">
                <ul className="space-y-3">
                    <li>
                        <Link
                            to="/dashboard"
                            className="flex items-center gap-3 hover:text-cyan-300"
                        >
                            <MdDashboard size={20}/>
                            {
                                !isCollapsed && (
                                    <span>Ínicio</span>
                                )
                            }

                        </Link>
                    </li>
                </ul>
            </nav>

        </aside>

    )
}

export default SideMenu