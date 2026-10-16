import axios from "axios";
import { useEffect, useState } from "react";
import { FaCalendarPlus } from "react-icons/fa"

const ExamsCounter = () => {
    const [examsCount, setExamsCount] = useState(0)

    useEffect(() => {
        const fetchExams = async (): Promise<void> => {
            try {
                const response = await axios.get(
                    "http://localhost:3000/exams"
                )
                setExamsCount(response.data.length)
            } catch (error) {
                console.error("Erro ao obter dados", error)
            }
        }

        fetchExams()
    }, [])

    return (
        <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center w-60">
            <h2 className="text-xl font-bold flex items-center gap-2">
                <FaCalendarPlus className="text-amber-500" />
                {examsCount}
            </h2>

            <p className="text-gray-600 mt-2">
                Exames
            </p>
        </div>
    )
}

export default ExamsCounter