import axios from "axios";
import { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router";

interface Patient {
    id: string;
    fullName: string;
    email?: string;
    phone: string;
    birthdate?: string;
    healthInsurance?: string
}

const PatientsList = () => {
    const [patients, setPatients] = useState<Patient[]>([])
    const [searchTerm, setSearchTerm] = useState<string>("")

    useEffect(() => {
        const fetchPatients = async (): Promise<void> => {
            try {
                const response = await axios.get<Patient[]>("http://localhost:3000/patients")
                setPatients(response.data)
            } catch (error) {
                console.error("Erro ao obter dados", error)
            }
        }
        fetchPatients()
    }, [])

    //calculo da idade

    const calculateAge = (
        birthdate?: string
    ): number | "-" => {

        // Divide a data no formato brasileiro: DD/MM/AAAA - 11/05/2000


        const [day, month, year] = birthdate.split("/")

        //verifica se a data possui o formato esperado
        if (!day || !month || !year) {
            return "-"
        }


        //converte a data em string para formato de data numerica. Obs: O mês é subtraído porque o js começa a contagem por 0 (janeiro)

        const birthdateDate = new Date(
            Number(year),
            Number(month) - 1,
            Number(day)
        )

        const today = new Date()

        // console.log("hoje", today)

        let age = today.getFullYear() - birthdateDate.getFullYear()

        // console.log("ano", age)

        const monthDiff = today.getMonth() - birthdateDate.getMonth()

        // console.log("mês", monthDiff)

        if (
            monthDiff < 0 || monthDiff === 0 && today.getDate() < birthdateDate.getDate()
        ) {
            age--
        }

        return age

    }

    // console.log(calculateAge("11/09/1980"))

    //pega o evento de change (alteração) dentro do campo de formulário

    const handleSearchChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setSearchTerm(event.target.value)
    }

    //filtro de pacientes

    const filteredPatients = patients.filter((patient) =>
        [
            patient.fullName,
            patient.email,
            patient.phone
        ]
            .join(" ")
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    )

    return (
        <div className="bg-white shadow rounded-2xl p-6 mt-8">
            <h2 className="text-xl font-semibold text-cyan-800 mb-4">
                Informações Rápidas de Pacientes
            </h2>

            {/* campo de busca (filtro) */}

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
                <label
                    htmlFor="search"
                    className="text-gray-700 font-medium"
                >
                    Buscar Paciente:
                </label>

                <input
                    type="text"
                    id="search"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Digite seu nome, email ou telefone"
                    className="border rounded-lg px-3 py-2 w-full sm:w-80 focus:ring-2 focus:ring-cyan-600 outline-none"
                />
            </div>


            {/* Lista de pacientes */}

            {filteredPatients.length > 0 ? (
                <ul className="divide-y divide-gray-200">
                    {filteredPatients.map((patient) => {
                        const age = calculateAge(patient.birthdate)
                        return (
                            <li
                                key={patient.id}
                                className="flex flex-col sm:flex-row sm:items-center justify-between py-4"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="bg-cyan-100 text-cyan-700 p-3 rounded-full">
                                        <FaUserAlt size={20} />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800">
                                            {patient.fullName}
                                        </p>

                                        <p className="font-semibold text-gray-800">
                                            {patient.email}
                                        </p>

                                        <p className="font-semibold text-gray-800">
                                            {patient.phone}
                                        </p>
                                    </div>

                                </div>

                                <div className="text-sm text-gray-600 mt-2 sm:mt-0 text-right">
                                    <p>
                                        <strong>idade: </strong>
                                        {age} anos
                                    </p>

                                    <p>
                                        <strong>Plano: </strong>
                                        {patient.healthInsurance}
                                    </p>

                                    <Link
                                        to={`/paciente/${patient.id}`}
                                        className="text-cyan-700 font-semibold hover:underline"
                                    >
                                        Ver detalhes
                                    </Link>

                                </div>

                            </li>
                        )
                    })}
                </ul>
            ) : (
                <p className="text-gray-500 text-center py-6">
                    Nenhum paciente encontrado.
                </p>
            )}


        </div>
    )
}

export default PatientsList