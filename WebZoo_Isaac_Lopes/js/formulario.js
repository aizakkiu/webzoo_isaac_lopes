const participationForm = document.querySelector("#participation-form");
if (participationForm) {
  const status = document.querySelector("#form-status");
  const requiredFields = ["name", "email", "cep", "subject", "message"];
  function showError(id, message) {
    const field = document.getElementById(id);
    const error = document.getElementById(`${id}-error`);
    field.setAttribute("aria-invalid", "true");
    field.setAttribute("aria-describedby", `${id}-error`);
    error.textContent = message;
  }
  function clearError(id) {
    const field = document.getElementById(id);
    const error = document.getElementById(`${id}-error`);
    field.removeAttribute("aria-invalid");
    field.removeAttribute("aria-describedby");
    error.textContent = "";
  }
  participationForm.addEventListener("submit", event => {
    event.preventDefault();
    requiredFields.forEach(clearError);
    status.textContent = "";
    const values = Object.fromEntries(new FormData(participationForm).entries());
    let firstInvalid = null;
    const fail = (id, message) => { showError(id, message); firstInvalid ||= document.getElementById(id); };
    if (!values.name || values.name.trim().split(/\s+/).length < 2) fail("name", "Informe seu nome completo.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email || "")) fail("email", "Informe um e-mail válido.");
    if (!/^\d{8}$/.test((values.cep || "").replace(/\D/g, ""))) fail("cep", "Digite um CEP com 8 números.");
    if (!values.subject) fail("subject", "Selecione um assunto.");
    if (!values.message || values.message.trim().length < 10) fail("message", "Escreva uma mensagem com pelo menos 10 caracteres.");
    if (!document.querySelector("#consent").checked) {
      status.textContent = "Para continuar, marque o aceite de comunicações.";
      if (!firstInvalid) firstInvalid = document.querySelector("#consent");
    }
    if (firstInvalid) { firstInvalid.focus(); return; }
    status.textContent = `Cadastro recebido! Obrigado por participar do WebZoo, ${values.name.trim()}. Este formulário é demonstrativo: nenhum dado foi enviado ou armazenado.`;
    participationForm.reset();
  });
}
