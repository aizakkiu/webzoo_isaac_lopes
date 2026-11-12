const cepInput = document.querySelector("#cep");
const cepButton = document.querySelector("#cep-button");
const cepResult = document.querySelector("#cep-result");
if (cepInput && cepButton && cepResult) {
  const fields = {
    street: document.querySelector("#street"),
    neighborhood: document.querySelector("#neighborhood"),
    city: document.querySelector("#city"),
    state: document.querySelector("#state")
  };
  cepInput.addEventListener("input", () => {
    cepInput.value = cepInput.value.replace(/\D/g, "").slice(0, 8);
  });
  async function searchCep(event) {
    if (event) event.preventDefault();
    const cep = cepInput.value.replace(/\D/g, "");
    if (!/^\d{8}$/.test(cep)) {
      cepResult.textContent = "Digite um CEP válido com 8 números.";
      cepInput.setAttribute("aria-invalid", "true");
      cepInput.focus();
      return;
    }
    cepInput.removeAttribute("aria-invalid");
    cepButton.disabled = true;
    cepResult.textContent = "Buscando endereço...";
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      if (!response.ok) throw new Error("Falha na consulta");
      const data = await response.json();
      if (data.erro) {
        cepResult.textContent = "Não encontramos esse CEP. Confira os números e tente novamente.";
        return;
      }
      Object.entries(fields).forEach(([key, field]) => {
        if (field) field.value = data[{street:"logradouro", neighborhood:"bairro", city:"localidade", state:"uf"}[key]] || "";
      });
      cepResult.textContent = `Endereço encontrado: ${data.logradouro || "logradouro não informado"}, ${data.bairro || "bairro não informado"} — ${data.localidade}/${data.uf}.`;
    } catch (error) {
      cepResult.textContent = "Não foi possível consultar o CEP agora. Tente novamente em instantes.";
    } finally {
      cepButton.disabled = false;
    }
  }
  const form = document.querySelector("#cep-form");
  if (form) form.addEventListener("submit", searchCep);
  else cepButton.addEventListener("click", searchCep);
}
