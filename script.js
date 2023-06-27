const btn = document.querySelector('.btn');

const diaCampo = document.querySelector("#age-days");
const mesCampo = document.querySelector("#age-months");
const anoCampo = document.querySelector("#age-years");

function validarData(dia, mes, ano) {
  const data = new Date(ano, mes - 1, dia);
  return (
    dia > 0 &&
    dia <= 31 &&
    mes > 0 &&
    mes <= 12 &&
    ano.length === 4 &&
    !isNaN(data.getTime())
  );
}

function calcularIdade() {
  const dia = document.querySelector('#day').value;
  const mes = document.querySelector('#month').value;
  const ano = document.querySelector('#year').value;


  if (!dia || !mes || !ano) {
    mostrarMensagemErro('Preencha todos os campos');
    return;
  }

 
  if (!validarData(dia, mes, ano)) {
    mostrarMensagemErro('Data inválida');
    return;
  }

  const dataAtual = new Date();
  const dataNascimento = new Date(ano, mes - 1, dia);

  let idadeAnos = dataAtual.getFullYear() - dataNascimento.getFullYear();
  let idadeMeses = dataAtual.getMonth() - dataNascimento.getMonth();
  let idadeDias = dataAtual.getDate() - dataNascimento.getDate();

  if (idadeDias < 0) {
    idadeMeses--;
    const ultimoDiaMesAnterior = new Date(
      dataAtual.getFullYear(),
      dataAtual.getMonth(),
      0
    ).getDate();
    idadeDias += ultimoDiaMesAnterior;
  }

  if (idadeMeses < 0) {
    idadeAnos--;
    idadeMeses += 12;
  }


  anoCampo.textContent = idadeAnos;
  mesCampo.textContent = idadeMeses;
  diaCampo.textContent = idadeDias;
}

function mostrarMensagemErro(mensagem) {
  const avisoDia = document.querySelector('#aviso-dia');
  const avisoMes = document.querySelector('#aviso-mes');
  const avisoAno = document.querySelector('#aviso-ano');


  avisoDia.textContent = mensagem;
  avisoMes.textContent = mensagem;
  avisoAno.textContent = mensagem;
}

btn.addEventListener('click', calcularIdade);
