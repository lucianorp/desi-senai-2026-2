import ConsultsCounter from "../../components/counters/ConsultsCounter"
import ExamsCounter from "../../components/counters/ExamsCounter"
import PatientsCounter from "../../components/counters/PatientsCounter"

const Dashboard = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-cyan-800 mb-6">
                Estatísticas do Sistema
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <PatientsCounter />
                <ConsultsCounter />
                <ExamsCounter />
            </div>

        </div>
    )
}

export default Dashboard