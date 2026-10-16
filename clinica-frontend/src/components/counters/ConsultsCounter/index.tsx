import axios from "axios";
import { useEffect, useState } from "react";
import { FaCalendarCheck } from "react-icons/fa"

const ConsultsCounter = () => {
    const [consultCount, setConsultCount] = useState(0)

    useEffect(() => {
        const fetchConsults = async (): Promise<void> => {
            try {
                const response = await axios.get(
                    "http://localhost:3000/consults"
                )
                setConsultCount(response.data.length)
            } catch (error) {
                console.error("Erro ao obter dados", error)
            }
        }

        fetchConsults()
    }, [])

    return (
        <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center w-60">
            <h2 className="text-xl font-bold flex items-center gap-2">
                <FaCalendarCheck className="text-green-600" />
                {consultCount}
            </h2>

            <p className="text-gray-600 mt-2">
                Consultas
            </p>
        </div>
    )
}

export default ConsultsCounter