import {createContext, useContext,useState,useEffect,ReactNode} from "react"

interface User{
    email:string
}


interface AuthContextType{
    user:User | null;
    login:(email:string) =>void
    logout:()=>void
}

interface AuthProviderProps{
    children:ReactNode
}

const AuthContext = createContext<AuthContextType | undefined>(
    undefined
)

export const AuthProvider = ({
    children
}:AuthProviderProps)=>{

    //verifica se o localStorage tem a chave email preenchida
    const [user, setUser] = useState<User | null>(null)

    useEffect(()=>{
        const savedEmail = localStorage.getItem("email")

        if(savedEmail){
            setUser({
                email:savedEmail
            })
        }
    },[])

    //função de login registra o valor do email preenchido na validação de entrada na chave "email" no localStorage

    const login = (email:string):void =>{
        localStorage.setItem("email",email)

        setUser({email})
    }

    const logout = ():void =>{
        localStorage.removeItem("email")
        setUser(null)
    }

    return(
        <AuthContext.Provider
            value={{
                user,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = ():AuthContextType =>{
    const context = useContext(AuthContext)

    if(!context){
        throw new Error(
            "useAuth deve ser usado dentro de AuthProvider"
        )
    }

    return context

}