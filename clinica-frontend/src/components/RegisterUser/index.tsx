import axios from "axios"
import { useState } from "react"
import { toast } from "react-toastify"


const RegisterUser = ()=>{
    const [email,setEmail] = useState<string>("")
    const [password,setPassword] = useState<string>("")
    const [confirmPassword,setConfirmPassword] = useState<string>("")
    const [isPasswordMatch, setIsPasswordMatch] = useState<boolean>(true)
    const [isSaving,setIsSaving] = useState<boolean>(false)

    //Eventos dos campos de entrada

    const handleEmailChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setPassword(e.target.value)
    }

    const handleConfirmPasswordChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setConfirmPassword(e.target.value)
    }


    //validação da senha

    const isPasswordValid = ():boolean =>{
        return password.length >=8 && password === confirmPassword;
    }

    //Limpar o formulário

    const resetForm = ():void =>{
        setEmail("")
        setPassword("")
        setConfirmPassword("")
        setIsPasswordMatch(true)
    }

    //Envio do formulário

    const handleSubmit = async(
        e:React.FormEvent<HTMLFormElement>
    ):Promise<void>=>{
        e.preventDefault()

        if(!isPasswordValid()){
            setIsPasswordMatch(false)
            return
        }

        setIsSaving(true)

        try{
            await axios.post('http://localhost:3000/users',{
                email,
                password
            })

            setIsSaving(false)
            resetForm()

            // toast.success("Usuário criado com sucesso!",{
            //     autoClose:2000,
            //     hideProgressBar:true
            // })

            alert("Usuário criado com sucesso!")


        }catch(error){
            console.error("Erro ao criar usuário",error)

            toast.error('Erro ao criar o usuário!',{
                autoClose:2000,
                hideProgressBar:true
            })

             setIsSaving(false)
        }
    }



    return(
        <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">
                Criar Usuário
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <fieldset>
                    <label
                        htmlFor="emailRegisterUser"
                        className="block text-sm font-medium mb-1"
                    >
                        Email:
                    </label>
                    <input
                        type="email"
                        id="emailRegisterUser"
                        value={email}
                        onChange={handleEmailChange}
                        required
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </fieldset>

                <fieldset>
                    <label
                        htmlFor="passwordRegisterUser"
                        className="block text-sm font-medium mb-1"
                    >
                        Senha:
                    </label>
                    <input
                        type="password"
                        id="passwordRegisterUser"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </fieldset>


                <fieldset>
                    <label
                        htmlFor="confirmPasswordRegisterUser"
                        className="block text-sm font-medium mb-1"
                    >
                        Confirmar Senha:
                    </label>
                    <input
                        type="password"
                        id="confirmPasswordRegisterUser"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        required
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    
                    {!isPasswordMatch && (
                        <p className="text-red-500 text-sm mt-2">
                            As senhas não correspondem!
                        </p>
                    )}

                </fieldset>

                <fieldset>
                    <button
                    type="submit"
                    disabled={isSaving}

                    className={
                        `w-full p-2 rounded-lg text-white ${
                            isSaving
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-blue-600 hover:bg-blue-700'
                        } transition-colors`
                    }
                    >
                        {isSaving ? 'Salvando...' : 'Criar Usuário'}
                    </button>
                </fieldset>
            </form>
        </div>
    )
}

export default RegisterUser