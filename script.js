const inputText = document.getElementById('texto-tarefa');
const createTaskBtn = document.querySelector('#criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const x = document.getElementById('apaga-tudo');
const toUpBtn = document.getElementById('mover-cima');
const toDownBtn = document.getElementById('mover-baixo');
const finishedBtn = document.getElementById('remover-finalizados');
const removeSelectedBtn = document.getElementById('remover-selecionado');
const saveTasksBtn = document.getElementById('salvar-tarefas');

const COLOR_HIGHLIGHT = 'var(--cor-highlight)';

// FUNÇÃO QUE ADD TAREFA
function addTasks() {
  const li = document.createElement('li');
  li.innerText = inputText.value;
  if (li.innerText !== '') {
    taskList.appendChild(li);
  }
  document.getElementById('texto-tarefa').value = ''; // limpando a caixinha em seguida
} createTaskBtn.addEventListener('click', addTasks);

// FUNÇÃO QUE ADD TAREFA COM A TECLA ENTER
function addTarefaWithEnter(event) {
  if (event.key === 'Enter') {
    addTasks();
  }
}
inputText.addEventListener('keydown', addTarefaWithEnter);

// FUNÇÃO QUE APAGA TUDO
function deleteAllBtn() {
  if (taskList.innerText !== '') {
    taskList.innerText = '';
  }
}
x.addEventListener('click', deleteAllBtn);

// FUNÇÃO QUE..RISCA FINALIZADOS
function completedTask(event) {
  event.target.classList.toggle('completed');
} taskList.addEventListener('dblclick', completedTask);

// FUNÇÃO MUDAR COR
function backgroundChanged({ target }) {
  for (let i = 0; i < taskList.children.length; i += 1) {
    taskList.children[i].style.backgroundColor = '';
  }
  target.style.backgroundColor = COLOR_HIGHLIGHT;
} taskList.addEventListener('click', backgroundChanged);

// FUNÇÃO DO BOTÃO REMOVER FINALIZADOS
function removerFinalizado() {
  for (let i = taskList.children.length - 1; i >= 0; i -= 1) {
    if (taskList.children[i].classList[0] === 'completed') {
      taskList.removeChild(taskList.children[i]);
    }
  }
} finishedBtn.addEventListener('click', removerFinalizado);

// FUNÇÃO DO BOTÃO DE SALVAR
function localStorageSave() {
  const tasks = [];
  for (let i = 0; i < taskList.children.length; i += 1) {
    const task = {
      texto: taskList.children[i].innerText,
      classe: taskList.children[i].classList.contains('completed') ? 'completed' : '',
    };
    tasks.push(task);
  }
  // Salva o array de tarefas no localStorage como uma string
  localStorage.setItem('tarefas', JSON.stringify(tasks));
}

// FUNÇÃO QUE CARREGA TAREFAS SALVA NO LOCALSTORAGE
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

// FUNÇÕES AUXILIARES DOS BOTÕES UP/DOWN
function findSelectedTask(task) {
  return task.nextElementSibling !== null && task.style.backgroundColor === COLOR_HIGHLIGHT;
}

function swapTaskElements(task1, task2) {
  const tempText = task1.innerText;

  task1.innerText = task2.innerText;
  task2.innerText = tempText;
}

function updateTaskColors(task1, task2) {
  const selectedColor = task1.style.backgroundColor;
  
  task1.style.backgroundColor = task2.style.backgroundColor;
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
} toUpBtn.addEventListener('click', moveUpBtn);

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
} toDownBtn.addEventListener('click', moveDownBtn);

// FUNÇÃO BOTÃO REMOVER SELECIONADO
function removeSelected() {
  let selected = '';
  for (let i = taskList.children.length - 1; i >= 0; i -= 1) {
    if (taskList.children[i].style.backgroundColor === COLOR_HIGHLIGHT) {
      selected = taskList.children[i];
      taskList.removeChild(selected);
    }
  }
} removeSelectedBtn.addEventListener('click', removeSelected);