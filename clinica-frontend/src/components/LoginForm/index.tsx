import { useState } from "react"

const LoginForm = ()=>{

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    return(
        <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6">
                Login
            </h2>

            <form className="space-y-4">
                <fieldset>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-1"
                    >
                        Email:
                    </label>

                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(event)=>setEmail(event.target.value)}
                        required
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </fieldset>


                <fieldset>
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium mb-1"
                    >
                        Senha:
                    </label>

                    <input
                        type="password"
                        id="password"
                        value={password}
                        minLength={8}
                        onChange={(e)=>setPassword(e.target.value)}
                        required
                        
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </fieldset>

                <button
                    type="submit"
                    className="w-full bg-cyan-700 text-white p-2 rounded-lg hover:bg-cyan-800 transition-colors cursor-pointer"
                >
                    Entrar
                </button>

            </form>
        </div>
    )
}

export default LoginForm