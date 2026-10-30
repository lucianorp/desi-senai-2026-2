const RegisterFormPatient = () => {
  
  return (
    <form
      
      className="flex-1 space-y-6 text-gray-800"
      autoComplete="off"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Nome completo */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium mb-1"
          >
            Nome Completo
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
           
            required
            className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none"
          />
        </div>

        {/* Gênero */}
        <div>
          <label
            htmlFor="gender"
            className="block text-sm font-medium mb-1"
          >
            Gênero
          </label>
          <select
            id="gender"
            name="gender"
            required
            className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none"
          >
            <option value="">Selecione</option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="outro">Outro</option>
          </select>
        </div>

        {/* Data de nascimento */}
        <div>
          <label
            htmlFor="birthdate"
            className="block text-sm font-medium mb-1"
          >
            Data de Nascimento
          </label>
          <input
            type="date"
            id="birthdate"
            name="birthdate"
           
            className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none"
          />
        </div>

        {/* CPF com máscara */}
        <div>
          <label
            htmlFor="cpf"
            className="block text-sm font-medium mb-1"
          >
            CPF
          </label>
          <input
            id="cpf"
           
            name="cpf"
           
            required
          
            className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none"
          />
        </div>

        {/* RG */}
        <div>
          <label
            htmlFor="rg"
            className="block text-sm font-medium mb-1"
          >
            RG
          </label>
          <input
            type="text"
            id="rg"
            name="rg"
           
            required
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* Estado civil */}
        <div>
          <label
            htmlFor="maritalStatus"
            className="block text-sm font-medium mb-1"
          >
            Estado Civil
          </label>
          <select
            id="maritalStatus"
            name="maritalStatus"
           
            required
            className="w-full border p-2 rounded-lg"
          >
            <option value="">Selecione</option>
            <option value="solteiro(a)">Solteiro(a)</option>
            <option value="casado(a)">Casado(a)</option>
            <option value="divorciado(a)">Divorciado(a)</option>
            <option value="viuvo(a)">Viúvo(a)</option>
          </select>
        </div>

        {/* Telefone com máscara */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium mb-1"
          >
            Telefone
          </label>
          <input
            id="phone"
           
            name="phone"
            className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none"
          />
        </div>

        {/* Contato de emergência com máscara */}
        <div>
          <label
            htmlFor="emergencyContact"
            className="block text-sm font-medium mb-1"
          >
            Contato de Emergência
          </label>
          <input
            id="emergencyContact"
           
            name="emergencyContact"
          
            className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outline-none"
          />
        </div>

        {/* E-mail */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-1"
          >
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
           
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* Naturalidade */}
        <div>
          <label
            htmlFor="birthplace"
            className="block text-sm font-medium mb-1"
          >
            Naturalidade
          </label>
          <input
            type="text"
            id="birthplace"
            name="birthplace"
           
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* Alergias */}
        <div>
          <label
            htmlFor="allergies"
            className="block text-sm font-medium mb-1"
          >
            Alergias
          </label>
          <input
            type="text"
            id="allergies"
            name="allergies"
           
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* Cuidados especiais */}
        <div>
          <label
            htmlFor="specialCare"
            className="block text-sm font-medium mb-1"
          >
            Cuidados Especiais
          </label>
          <input
            type="text"
            id="specialCare"
            name="specialCare"
           
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* Convênio */}
        <div>
          <label
            htmlFor="healthInsurance"
            className="block text-sm font-medium mb-1"
          >
            Convênio
          </label>
          <input
            type="text"
            id="healthInsurance"
            name="healthInsurance"
           
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* Número do convênio */}
        <div>
          <label
            htmlFor="insuranceNumber"
            className="block text-sm font-medium mb-1"
          >
            Número do Convênio
          </label>
          <input
            type="text"
            id="insuranceNumber"
            name="insuranceNumber"
           
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* Validade do convênio */}
        <div>
          <label
            htmlFor="insuranceValidity"
            className="block text-sm font-medium mb-1"
          >
            Validade do Convênio
          </label>
          <input
            type="date"
            id="insuranceValidity"
            name="insuranceValidity"
           
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* CEP com máscara */}
        <div>
          <label
            htmlFor="cep"
            className="block text-sm font-medium mb-1"
          >
            CEP
          </label>
          <input
            id="cep"
           
            name="cep"
           
            
            
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* Rua */}
        <div>
          <label
            htmlFor="street"
            className="block text-sm font-medium mb-1"
          >
            Rua
          </label>
          <input
            type="text"
            id="street"
            name="street"
           
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* Número do endereço */}
        <div>
          <label
            htmlFor="number"
            className="block text-sm font-medium mb-1"
          >
            Número
          </label>
          <input
            type="text"
            id="number"
            name="number"
           
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* Referência */}
        <div>
          <label
            htmlFor="reference"
            className="block text-sm font-medium mb-1"
          >
            Referência
          </label>
          <input
            type="text"
            id="reference"
            name="reference"
           
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* Complemento */}
        <div>
          <label
            htmlFor="complement"
            className="block text-sm font-medium mb-1"
          >
            Complemento
          </label>
          <input
            type="text"
            id="complement"
            name="complement"
            
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* Bairro */}
        <div>
          <label
            htmlFor="neighborhood"
            className="block text-sm font-medium mb-1"
          >
            Bairro
          </label>
          <input
            type="text"
            id="neighborhood"
            name="neighborhood"
           
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* Cidade */}
        <div>
          <label
            htmlFor="city"
            className="block text-sm font-medium mb-1"
          >
            Cidade
          </label>
          <input
            type="text"
            id="city"
            name="city"
            
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* Estado */}
        <div>
          <label
            htmlFor="state"
            className="block text-sm font-medium mb-1"
          >
            Estado
          </label>
          <input
            type="text"
            id="state"
            name="state"
           
            className="w-full border p-2 rounded-lg"
          />
        </div>
      </div>

      {/* Botão de envio */}
      <div className="flex justify-end gap-3 pt-4">
        <button
          type="submit"
          
          className="px-4 py-2 bg-cyan-700 text-white rounded-lg hover:bg-cyan-600 disabled:opacity-50"
        >
          Salvar
        </button>
      </div>
    </form>
  );
};

export default RegisterFormPatient;
