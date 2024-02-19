// pegando meu texto-tarefa.. input onde escreve a tarefa
const inputText = document.getElementById('texto-tarefa');
// pegando meu criar-tarefa.. botao que add tarefas
const createTaskBtn = document.querySelector('#criar-tarefa');
// pegando minha lista
const taskList = document.getElementById('lista-tarefas');
// pegando o botão apaga-tudo
const x = document.getElementById('apaga-tudo');
// pegando o botão mover-cima
const toUpBtn = document.getElementById('mover-cima');
// pegando o botão mover-baixo
const toDownBtn = document.getElementById('mover-baixo');
// pegando o botão remover-finalizados
const finishedBtn = document.getElementById('remover-finalizados');
// pegando o botão remover-selecionado
const removeSelectedBtn = document.getElementById('remover-selecionado');
// pegando o  botão salvar-tarefas
const saveTasksBtn = document.getElementById('salvar-tarefas');

const COLOR_HIGHLIGHT = 'var(--cor-highlight)';

// FUNÇÃO QUE ADD TAREFA
function addTasks() {
  const li = document.createElement('li');
  li.innerText = inputText.value;
  taskList.appendChild(li);
  document.getElementById('texto-tarefa').value = ''; // redefinindo valor, pra poder limpar a caixinha
}
// add o tal do evento de click
createTaskBtn.addEventListener('click', addTasks);

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
  target.style.backgroundColor = COLOR_HIGHLIGHT;
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
finishedBtn.addEventListener('click', removerFinalizado);
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
function saveTasks() {
  const savedTasks = localStorage.getItem('tarefas');

  if (savedTasks) {
    const tasks = JSON.parse(savedTasks);

    // Adiciona as tasks de volta à lista
    tasks.forEach((task) => {
      const li = document.createElement('li');
      li.innerText = task.texto;
      // Adiciona a classe 'completed' se a task tiver essa classe
      if (task.classe === 'completed') {
        li.classList.add('completed');
      }
      taskList.appendChild(li);
    });
  }
} window.addEventListener('load', saveTasks);

saveTasksBtn.addEventListener('click', localStorageSave);

// FUNÇÕES AUXILIARES DO MOVEDOWN

function findSelectedTask(task) {
  return task.nextElementSibling !== null && task.style.backgroundColor === COLOR_HIGHLIGHT;
}

function swapTaskElements(task1, task2) {
  const tempText = task1.innerText;
  // eslint-disable-next-line no-param-reassign
  task1.innerText = task2.innerText;
  // eslint-disable-next-line no-param-reassign
  task2.innerText = tempText;
}

function updateTaskColors(task1, task2) {
  const selectedColor = task1.style.backgroundColor;
  // eslint-disable-next-line no-param-reassign
  task1.style.backgroundColor = task2.style.backgroundColor;
  // eslint-disable-next-line no-param-reassign
  task2.style.backgroundColor = selectedColor;
}

// FUNÇÃO DO BOTÃO MOVER PARA CIMA
function moveUpBtn() {
  let selected = '';
  let previousTask = '';
  for (let i = 0; i < taskList.children.length; i += 1) {
    if (taskList.children[i].previousSibling.innerText !== undefined
      && taskList.children[i].style.backgroundColor === COLOR_HIGHLIGHT) {
      previousTask = taskList.children[i].previousElementSibling;
      selected = taskList.children[i];
      updateTaskColors(selected, previousTask);
      swapTaskElements(selected, previousTask);
      return taskList.children;
    }
  }
}
toUpBtn.addEventListener('click', moveUpBtn);

// FUNÇÃO BOTÃO DE MOVER PARA BAIXO
function moveDownBtn() {
  let selected = '';
  let nextTask = '';
  for (let i = 0; i < taskList.children.length; i += 1) {
    if (findSelectedTask(taskList.children[i])) {
      nextTask = taskList.children[i].nextElementSibling;
      selected = taskList.children[i];
      updateTaskColors(selected, nextTask);
      swapTaskElements(selected, nextTask);
      return taskList.children;
    }
  }
}
toDownBtn.addEventListener('click', moveDownBtn);

// FUNÇÃO BOTÃO REMOVER SELECIONADO
function removeSelected() {
  let selected = '';
  for (let index = taskList.children.length - 1; index >= 0; index -= 1) {
    if (taskList.children[index].style.backgroundColor === COLOR_HIGHLIGHT) {
      selected = taskList.children[index];
      taskList.removeChild(selected);
      return taskList;
    }
  }
} removeSelectedBtn.addEventListener('click', removeSelected);
