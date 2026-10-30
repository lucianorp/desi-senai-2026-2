import { useState, useEffect } from "react";
import type { ChangeEvent } from "react";
import { Link } from "react-router";
import axios from "axios";

// 1. Define a estrutura dos dados de cada paciente
interface Patient {
  id: string;
  fullName: string;
  healthInsurance?: string;
}

// 2. Cria o componente
const MedicalRecordList = () => {
  // 3. Estados tipados
  const [patients, setPatients] = useState<Patient[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // 4. Busca os pacientes no JSON Server
  useEffect(() => {
    const fetchPatients = async (): Promise<void> => {
      try {
        const response = await axios.get<Patient[]>(
          "http://localhost:3000/patients"
        );

        setPatients(response.data);
      } catch (error) {
        console.error(
          "Erro ao obter dados dos pacientes:",
          error
        );
      }
    };

    fetchPatients();
  }, []);

  // 5. Atualiza o texto da busca
  const handleSearchChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchTerm(event.target.value);
  };

  // 6. Filtra por nome ou identificador
  const filteredPatients = patients.filter((patient) => {
    const search = searchTerm.toLowerCase().trim();

    return (
      patient.fullName.toLowerCase().includes(search) ||
      patient.id.toString().toLowerCase().includes(search)
    );
  });

  // 7. Renderiza a listagem
  return (
    <section className="flex-1 p-6 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Listagem de Prontuários
      </h2>

      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
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
          placeholder="Digite o nome ou identificador"
          className="w-full sm:w-1/2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
        />
      </div>

      <ul className="space-y-4">
        {filteredPatients.length > 0 ? (
          filteredPatients.map((patient) => (
            <li
              key={patient.id}
              className="p-4 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow"
            >
              <p className="text-sm text-gray-500">
                <strong className="text-gray-700">
                  Registro:
                </strong>{" "}
                {patient.id}
              </p>

              <p className="text-gray-700">
                <strong>Nome:</strong> {patient.fullName}
              </p>

              <p className="text-gray-700">
                <strong>Convênio:</strong>{" "}
                {patient.healthInsurance || "Não informado"}
              </p>

              <Link
                to={`/paciente/${patient.id}`}
                className="inline-block mt-2 text-cyan-700 font-semibold hover:underline"
              >
                Ver detalhes
              </Link>
            </li>
          ))
        ) : (
          <li className="text-gray-600">
            Nenhum paciente encontrado.
          </li>
        )}
      </ul>
    </section>
  );
};

export default MedicalRecordList;
