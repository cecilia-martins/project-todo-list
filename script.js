// BOTÕES
// pegando meu texto-tarefa.. input onde escreve a tarefa
const textoTarefa = document.getElementById('texto-tarefa');
// pegando meu criar-tarefa.. botao que add tarefas
const btnCriarTarefas = document.querySelector('#criar-tarefa');
// pegando minha lista
const taskList = document.getElementById('lista-tarefas');
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
  taskList.appendChild(li);

  document.getElementById('texto-tarefa').value = ''; // redefinindo valor, pra poder limpar a caixinha
}
// add o tal do evento de click
btnCriarTarefas.addEventListener('click', addTarefa);
// ENTENDI ERRADO??? NÃO SEI, MAS TA FUNCIONANDO KKKKKKK <33333
// NÃO MEXE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// FUNÇÃO QUE APAGA TUDO
function apagaTudo() {
  if (taskList.innerText !== '') {
    taskList.innerText = '';
  }
}
x.addEventListener('click', apagaTudo); // MEU BOTÃO FUNCIONA!!!!!!!!!!!!!!!!AAAAAAAAAAAAAAAA NÃO MEXE!!!!!!!!!!!!!!!!!!

// FUNÇÃO QUE..RISCA
// CRIANDO A FUNÇÃO
function risca(event) {
  event.target.classList.toggle('completed');
  // troquei add pelo toggle

// console.log('funfou')
} taskList.addEventListener('dblclick', risca); // FUNCIONANDO, NÃO MEXE!!!!

// FUNÇÃO MUDAR COR
function corFundo({ target }) {
  // console.log(lisDeTarefas.children.length);
  for (let posi = 0; posi < taskList.children.length; posi += 1) {
    taskList.children[posi].style.backgroundColor = '';
  }
  // eslint-disable-next-line sonarjs/no-duplicate-string, no-param-reassign
  target.style.backgroundColor = 'var(--cor-highlight)';
} taskList.addEventListener('click', corFundo);
//

// FUNÇÃO DO BOTÃO REMOVER FINALIZADOS - removeFinalkizado

function removerFinalizado() {
  let liFilho = '';
  for (let posi = taskList.children.length - 1; posi >= 0; posi -= 1) {
  //  console.log(lisDeTarefas.childNodes[posi].classList[0]);
    if (taskList.children[posi].classList[0] === 'completed') {
      liFilho = taskList.children[posi];

      taskList.removeChild(liFilho);
    }
  }
}
removeFinalizado.addEventListener('click', removerFinalizado);
// FUNÇÃO DO BOTÃO DE SALAVAR - RASCUNHO
function localStorageSave() {
  const tarefas = [];

  // Itera sobre as li's para obter o texto e a classe de cada tarefa
  for (let i = 0; i < taskList.children.length; i += 1) {
    const tarefa = {
      texto: taskList.children[i].innerText,
      classe: taskList.children[i].classList.contains('completed') ? 'completed' : '',
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
    tarefas.forEach((tarefa) => {
      const li = document.createElement('li');
      li.innerText = tarefa.texto;
      // Adiciona a classe 'completed' se a tarefa tiver essa classe
      if (tarefa.classe === 'completed') {
        li.classList.add('completed');
      }
      taskList.appendChild(li);
    });
  }
} window.addEventListener('load', saveBtn);

salvar.addEventListener('click', localStorageSave);

// FUNÇÃO DO BOTÃO CIMA
function moverCima() {
  let irmaoSelecionado = '';
  let irmaoDeCima = '';
  for (let i = 0; i < taskList.children.length; i += 1) {
    if (taskList.children[i]
      .previousSibling.innerText !== undefined && taskList
      .children[i].style.backgroundColor === 'var(--cor-highlight)') {
      irmaoDeCima = taskList.children[i].previousSibling.innerText;

      irmaoSelecionado = taskList.children[i].innerText;
      taskList.children[i].previousSibling.innerText = irmaoSelecionado;
      taskList.children[i].innerText = irmaoDeCima;
      taskList.children[i].previousSibling.style.backgroundColor = 'var(--cor-highlight)';
      taskList.children[i].style.backgroundColor = '';
      return taskList.children;
    }
  }
} praCima.addEventListener('click', moverCima);

// FUNÇÃO DO BOTÃO BAIXO
function moverBaixo() {
  let selecionado = '';
  let irmaoDeBaixo = '';
  for (let i = 0; i < taskList.children.length; i += 1) {
    if (taskList.children[i]
      .nextElementSibling !== null
      && taskList.children[i].style.backgroundColor === 'var(--cor-highlight)') {
      irmaoDeBaixo = taskList.children[i].nextElementSibling.innerText;
      selecionado = taskList.children[i].innerText;
      taskList.children[i].nextElementSibling.innerText = selecionado;
      taskList.children[i].innerText = irmaoDeBaixo;
      taskList.children[i].nextElementSibling.style.backgroundColor = 'var(--cor-highlight)';
      taskList.children[i].style.backgroundColor = '';
      return taskList.children;
    }
  }
} praBaixo.addEventListener('click', moverBaixo);

// FUNÇÃO BOTÃO REMOVER SELECIONADO
function removeSelected() {
  let selected = '';
  for (let index = taskList.children.length - 1; index >= 0; index -= 1) {
    if (taskList.children[index].style.backgroundColor === 'var(--cor-highlight)') {
      selected = taskList.children[index];
      taskList.removeChild(selected);
      return taskList;
    }
  }
} removeSelecionado.addEventListener('click', removeSelected);
