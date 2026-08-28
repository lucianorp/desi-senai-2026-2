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
        <></>
    )
}

export default Login