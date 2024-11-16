const buscarCepBtn = document.querySelector("#buscar-cep-btn");
const buscarCepInp = document.querySelector("#buscar-cep-inp");
const cidade = document.querySelector("#cidade");
const bairro = document.querySelector("#bairro");
const rua = document.querySelector("#rua");

function buscarCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.json())
    .then((data) => {
      if (data.erro) {
        alert("CEP não encontrado.");
        return;
      }
      cidade.innerHTML = `Cidade: ${data.localidade}`;
      bairro.innerHTML = `Bairro: ${data.bairro}`;
      rua.innerHTML = `Logradouro: ${data.logradouro}`;
      console.log(data);
    })
    .catch((error) => {
      alert("Erro ao buscar o CEP. Tente novamente.");
      console.error(error);
    });
}

buscarCepBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const cep = buscarCepInp.value.trim();

  if (cep === "") {
    alert("Digite um CEP");
  } else {
    buscarCep(cep);
    buscarCepInp.value = "";
  }
});
