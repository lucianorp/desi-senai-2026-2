import { useState, useEffect } from "react";
import type { ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Modal from "../ui/Modal";

interface Patient {
    id: string;
    fullName: string;
    healthInsurance?: string;
    email?: string;
    phone?: string;
}

interface ConsultationFormData {
    reason: string;
    date: string;
    time: string;
    description: string;
    medication: string;
    dosagePrecautions: string;
}

const createInitialFormData = (): ConsultationFormData => ({
    reason: "",
    date: "",
    time: "",
    description: "",
    medication: "",
    dosagePrecautions: "",
});

const ConsultationForm = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [patients, setPatients] = useState<Patient[]>([]);
    const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isSaving, setIsSaving] = useState<boolean>(false);
    const [formData, setFormData] =
        useState<ConsultationFormData>(createInitialFormData);

    // Busca os pacientes cadastrados no JSON Server
    useEffect(() => {
        const fetchPatients = async (): Promise<void> => {
            try {
                const response = await axios.get<Patient[]>(
                    "http://localhost:3000/patients"
                );

                setPatients(response.data);
            } catch (error) {
                console.error("Erro ao obter dados dos pacientes:", error);
                toast.error("Não foi possível carregar os pacientes.");
            }
        };

        void fetchPatients();
    }, []);

    // Atualiza o campo de busca
    const handleSearchChange = (
        event: ChangeEvent<HTMLInputElement>
    ): void => {
        setSearchTerm(event.target.value);
    };

    // Filtra pacientes pelo nome ou identificador
    const filteredPatients = patients.filter((patient) => {
        const search = searchTerm.toLowerCase().trim();

        return (
            patient.fullName.toLowerCase().includes(search) ||
            patient.id.toString().toLowerCase().includes(search)
        );
    });

    // Seleciona o paciente e abre o modal
    const handleSelectPatient = (patient: Patient): void => {
        setSelectedPatient(patient);
        setIsModalOpen(true);
    };

    // Fecha o modal e limpa o paciente selecionado
    const handleCloseModal = (): void => {
        setIsModalOpen(false);
        setSelectedPatient(null);
    };

    // Atualiza os campos do formulário
    const handleInputChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    // Restaura os campos para os valores iniciais
    const resetForm = (): void => {
        setFormData(createInitialFormData());
    };

    // Salva a consulta no JSON Server
    const handleSubmit = async (
        event: FormEvent<HTMLFormElement>
    ): Promise<void> => {
        event.preventDefault();

        if (!selectedPatient) {
            toast.error("Selecione um paciente antes de cadastrar a consulta.");
            return;
        }

        try {
            setIsSaving(true);

            const dataToSave = {
                patientId: selectedPatient.id,
                ...formData,
            };

            await axios.post("http://localhost:3000/consults", dataToSave);

            toast.success("Consulta cadastrada com sucesso!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
            });

            alert("Consulta cadastrada com sucesso!")

            resetForm();
            handleCloseModal();
        } catch (error) {
            console.error("Erro ao salvar os dados:", error);

            toast.error("Erro ao cadastrar consulta!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
            });
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <section className="p-6 text-gray-800 w-full">
            {/* Campo de busca */}
            <div className="mb-6">
                <label
                    htmlFor="patientSearch"
                    className="block text-sm font-semibold mb-2"
                >
                    Buscar paciente para cadastrar consulta
                </label>

                <input
                    type="text"
                    id="patientSearch"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Digite o nome ou registro do paciente"
                    className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none"
                />
            </div>

            {/* Lista de pacientes */}
            <ul className="space-y-3">
                {filteredPatients.map((patient) => (
                    <li
                        key={patient.id}
                        className="p-4 border rounded-lg shadow-sm flex justify-between items-center hover:bg-gray-50 transition"
                    >
                        <div>
                            <p className="text-sm">
                                <strong>Registro:</strong> {patient.id}
                            </p>

                            <p className="text-sm">
                                <strong>Nome:</strong> {patient.fullName}
                            </p>

                            <p className="text-sm">
                                <strong>Convênio:</strong>{" "}
                                {patient.healthInsurance || "Não informado"}
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={() => handleSelectPatient(patient)}
                            className="bg-cyan-700 text-white px-3 py-1.5 rounded-lg hover:bg-cyan-600 transition"
                        >
                            Selecionar
                        </button>
                    </li>
                ))}
            </ul>

            {/* Modal de cadastro da consulta */}
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                {selectedPatient && (
                    <>
                        <h2 className="text-lg font-bold mb-4 text-cyan-700">
                            Cadastrar consulta para {selectedPatient.fullName}
                        </h2>

                        {/* Dados básicos do paciente */}
                        <div className="mb-4 text-sm text-gray-700">
                            <p>
                                <strong>Email:</strong>{" "}
                                {selectedPatient.email || "Não informado"}
                            </p>

                            <p>
                                <strong>Telefone:</strong>{" "}
                                {selectedPatient.phone || "Não informado"}
                            </p>
                        </div>

                        {/* Formulário da consulta */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label
                                    htmlFor="reason"
                                    className="block text-sm font-medium mb-1"
                                >
                                    Motivo da Consulta
                                </label>

                                <input
                                    type="text"
                                    id="reason"
                                    name="reason"
                                    value={formData.reason}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label
                                        htmlFor="date"
                                        className="block text-sm font-medium mb-1"
                                    >
                                        Data
                                    </label>

                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="time"
                                        className="block text-sm font-medium mb-1"
                                    >
                                        Horário
                                    </label>

                                    <input
                                        type="time"
                                        id="time"
                                        name="time"
                                        value={formData.time}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="description"
                                    className="block text-sm font-medium mb-1"
                                >
                                    Descrição do Problema
                                </label>

                                <textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    rows={3}
                                    required
                                    className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="medication"
                                    className="block text-sm font-medium mb-1"
                                >
                                    Medicação Receitada
                                </label>

                                <input
                                    type="text"
                                    id="medication"
                                    name="medication"
                                    value={formData.medication}
                                    onChange={handleInputChange}
                                    className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="dosagePrecautions"
                                    className="block text-sm font-medium mb-1"
                                >
                                    Dosagem e Precauções
                                </label>

                                <textarea
                                    id="dosagePrecautions"
                                    name="dosagePrecautions"
                                    value={formData.dosagePrecautions}
                                    onChange={handleInputChange}
                                    rows={2}
                                    className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none"
                                />
                            </div>

                            {/* Botões */}
                            <div className="flex justify-end gap-3 pt-4">
                                <button
                                    type="button"
                                    onClick={handleCloseModal}
                                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
                                >
                                    Cancelar
                                </button>

                                <button
                                    type="submit"
                                    disabled={isSaving}
                                    className="px-4 py-2 bg-cyan-700 text-white rounded-lg hover:bg-cyan-600 disabled:opacity-50 transition"
                                >
                                    {isSaving ? "Salvando..." : "Salvar"}
                                </button>
                            </div>
                        </form>
                    </>
                )}
            </Modal>
        </section>
    );
};

export default ConsultationForm;
