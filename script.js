const btn = document.querySelector('.btn')

const diaCampo = document.querySelector("#age-days")
const mesCampo = document.querySelector("#age-months")
const anoCampo = document.querySelector("#age-years")

function VerificarValidade(dia, mes, ano) {
    let aviso = document.querySelector("#aviso")
    let campoValidado = false;

    while(campoValidado != true){
        if(dia < 1 || dia > 31){
            aviso.textContent("Deve ser um dia válido")
        }
        if(mes < 1 || mes > 12){
            aviso.textContent("Deve ser um mês válido")
        }
        if(ano > 2023){
            aviso.textContent("Deve ser um ano que aconteceu!")
        }
        
    }
}

function calcuclarIdade() {
  const dia = document.querySelector('#day').value;
  const mes = document.querySelector('#month').value;
  const ano = document.querySelector('#year').value;

  let anoNascimento = {
    dia: dia,
    mes: mes,
    ano: ano
  };

  const dataAtual = new Date();
  let idadeAnos = dataAtual.getFullYear() - parseInt(anoNascimento.ano);
  let idadeMeses = dataAtual.getMonth() - parseInt(anoNascimento.mes);
  let idadeDias = dataAtual.getDate() - parseInt(anoNascimento.dia);

  if (idadeMeses < 0 || (idadeMeses === 0 && idadeDias < 0)) {
    idadeAnos--;
    idadeMeses += 12;
  }

  if (idadeDias < 0) {
    const ultimoDiaMesAnterior = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 0).getDate();
    idadeDias += ultimoDiaMesAnterior;
    idadeMeses--;
  }

  anoCampo.textContent = idadeAnos;
  mesCampo.textContent = idadeMeses;
  diaCampo.textContent = idadeDias;
}

btn.addEventListener('click', calcuclarIdade)
