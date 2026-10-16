import axios from "axios";
import { useEffect, useState } from "react";
import { FaHospitalUser } from "react-icons/fa"

const PatientsCounter = () => {
    const [patientCount, setPatientCount] = useState(0)

    useEffect(() => {
        const fetchPatients = async (): Promise<void> => {
            try {
                const response = await axios.get(
                    "http://localhost:3000/patients"
                )
                setPatientCount(response.data.length)
            } catch (error) {
                console.error("Erro ao obter dados", error)
            }
        }

        fetchPatients()
    }, [])

    return (
        <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center w-60">
            <h2 className="text-xl font-bold flex items-center gap-2">
                <FaHospitalUser className="text-blue-600" />
                {patientCount}
            </h2>

            <p className="text-gray-600 mt-2">
                Pacientes
            </p>
        </div>
    )
}

export default PatientsCounter