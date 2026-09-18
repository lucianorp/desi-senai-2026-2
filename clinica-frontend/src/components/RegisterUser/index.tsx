

const RegisterUser = ()=>{
    return(
        <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">
                Criar Usuário
            </h2>

            <form className="space-y-4">
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
                        value=""
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
                        value=""
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
                        value=""
                        required
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </fieldset>

                <fieldset>
                    <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 cursor-pointer w-full text-white rounded-lg p-2"
                    >
                        Criar Usuário
                    </button>
                </fieldset>
            </form>
        </div>
    )
}

export default RegisterUser