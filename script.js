// BOTÕES
// pegando meu texto-tarefa.. input onde escreve a tarefa
const textoTarefa = document.getElementById('texto-tarefa');
// pegando meu criar-tarefa.. botao que add tarefas
const btnCriarTarefas = document.querySelector('#criar-tarefa');
// pegando minha lista
const lisDeTarefas = document.getElementById('lista-tarefas');
// pegando o botão apaga-tudo
const x = document.getElementById('apaga-tudo');
// pegando o botão mover-cima
const praCima = document.getElementById('mover-cima');
// pegando o botão mover-baixo
const praBaixo = document.getElementById('mover-baixo');
// pegando o botão remover-finalizados
const removeFinalizado = document.getElementById('remover-finalizados');
// pegando o botão remover-selecionado
const removeSelecionado = document.getElementById('remover-selecionado');
// pegando o  botão salvar-tarefas
const salvar = document.getElementById('salvar-tarefas');

// FUNÇÃO QUE ADD TAREFA
function addTarefa() {
  /* alert("funfou?"); */
  /* alert(textoTarefa); */
  const li = document.createElement('li');
  li.innerText = textoTarefa.value;
  lisDeTarefas.appendChild(li);

  document.getElementById('texto-tarefa').value = ''; // redefinindo valor, pra poder limpar a caixinha
}
// add o tal do evento de click
btnCriarTarefas.addEventListener('click', addTarefa);
// ENTENDI ERRADO??? NÃO SEI, MAS TA FUNCIONANDO KKKKKKK <33333
// NÃO MEXE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// FUNÇÃO QUE APAGA TUDO
function apagaTudo() {
  if (lisDeTarefas.innerText !== '') {
    lisDeTarefas.innerText = '';
  }
}
x.addEventListener('click', apagaTudo); // MEU BOTÃO FUNCIONA!!!!!!!!!!!!!!!!AAAAAAAAAAAAAAAA NÃO MEXE!!!!!!!!!!!!!!!!!!

// FUNÇÃO QUE..RISCA
// CRIANDO A FUNÇÃO
function risca(event) {
  event.target.classList.toggle('completed');
  // troquei add pelo toggle

// console.log('funfou')
} lisDeTarefas.addEventListener('dblclick', risca); // FUNCIONANDO, NÃO MEXE!!!!

// FUNÇÃO MUDAR COR
function corFundo({ target }) {
  // console.log(lisDeTarefas.children.length);
  for (let posi = 0; posi < lisDeTarefas.children.length; posi += 1) {
    lisDeTarefas.children[posi].style.backgroundColor = '';
  }
  target.style.backgroundColor = 'rgb(128, 128, 128)';
} lisDeTarefas.addEventListener('click', corFundo);
//

// FUNÇÃO DO BOTÃO REMOVER FINALIZADOS - removeFinalkizado

function removerFinalizado() {
  let liFilho = '';
  for (let posi = lisDeTarefas.children.length - 1; posi >= 0; posi -= 1) {
  //  console.log(lisDeTarefas.childNodes[posi].classList[0]);
    if (lisDeTarefas.children[posi].classList[0] === 'completed') {
      liFilho = lisDeTarefas.children[posi];

      lisDeTarefas.removeChild(liFilho);
    }
  }
}
removeFinalizado.addEventListener('click', removerFinalizado);
// FUNÇÃO DO BOTÃO DE SALAVAR - RASCUNHO
function localStorageSave() {
  const tarefas = [];

  // Itera sobre as li's para obter o texto e a classe de cada tarefa
  for (let i = 0; i < lisDeTarefas.children.length; i += 1) {
    const tarefa = {
      texto: lisDeTarefas.children[i].innerText,
      classe: lisDeTarefas.children[i].classList.contains('completed') ? 'completed' : '',
    };
    tarefas.push(tarefa);
  }

  // Salva o array de tarefas no localStorage como uma string
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

// Carrega as tarefas salvas no localStorage quando a página carrega
function saveBtn() {
  const tarefasSalvas = localStorage.getItem('tarefas');

  if (tarefasSalvas) {
    const tarefas = JSON.parse(tarefasSalvas);

    // Adiciona as tarefas de volta à lista
    tarefas.forEach(function (tarefa) {
      const li = document.createElement('li');
      li.innerText = tarefa.texto;
      // Adiciona a classe 'completed' se a tarefa tiver essa classe
      if (tarefa.classe === 'completed') {
        li.classList.add('completed');
      }
      lisDeTarefas.appendChild(li);
    });
  }
} window.addEventListener('load', saveBtn);

salvar.addEventListener('click', localStorageSave);

// FUNÇÃO DO BOTÃO CIMA
function moverCima() {
  let irmaoSelecionado = '';
  let irmaoDeCima = '';
  for (let i = 0; i < lisDeTarefas.children.length; i += 1) {
    if (lisDeTarefas.children[i]
      .previousSibling.innerText !== undefined && lisDeTarefas
      .children[i].style.backgroundColor === 'rgb(128, 128, 128)') {
      irmaoDeCima = lisDeTarefas.children[i].previousSibling.innerText;

      irmaoSelecionado = lisDeTarefas.children[i].innerText;
      lisDeTarefas.children[i].previousSibling.innerText = irmaoSelecionado;
      lisDeTarefas.children[i].innerText = irmaoDeCima;
      lisDeTarefas.children[i].previousSibling.style.backgroundColor = 'rgb(128, 128, 128)';
      lisDeTarefas.children[i].style.backgroundColor = '';
      return lisDeTarefas.children;
    }
  }
} praCima.addEventListener('click', moverCima);

// FUNÇÃO DO BOTÃO BAIXO
function moverBaixo() {
  let selecionado = '';
  let irmaoDeBaixo = '';
  for (let i = 0; i < lisDeTarefas.children.length; i += 1) {
    if (lisDeTarefas.children[i]
      .nextElementSibling !== null
      && lisDeTarefas.children[i].style.backgroundColor === 'rgb(128, 128, 128)') {
      irmaoDeBaixo = lisDeTarefas.children[i].nextElementSibling.innerText;
      selecionado = lisDeTarefas.children[i].innerText;
      lisDeTarefas.children[i].nextElementSibling.innerText = selecionado;
      lisDeTarefas.children[i].innerText = irmaoDeBaixo;
      lisDeTarefas.children[i].nextElementSibling.style.backgroundColor = 'rgb(128, 128, 128)';
      lisDeTarefas.children[i].style.backgroundColor = '';
      return lisDeTarefas.children;
    }
  }
} praBaixo.addEventListener('click', moverBaixo);

// FUNÇÃO BOTÃO REMOVER SELECIONADO
function removerSelecionado() {
  let selecionadoRemove = '';
  for (let posi = lisDeTarefas.children.length - 1; posi >= 0; posi -= 1) {
    // eslint-disable-next-line no-constant-condition
    // eslint-disable-next-line no-cond-assign
    if (lisDeTarefas.children[posi].style.backgroundColor = 'rgb(128, 128, 128)') {
      selecionadoRemove = lisDeTarefas.children[posi];
      lisDeTarefas.removeChild(selecionadoRemove);
      return lisDeTarefas;
    }
  }
} removeSelecionado.addEventListener('click', removerSelecionado);
