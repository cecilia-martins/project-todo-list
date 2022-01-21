// pegando meu texto-tarefa.. input onde escreve a tarefa
let textoTarefa = document.getElementById('texto-tarefa');
// pegando meu criar-tarefa.. botao que add tarefas
let btnCriarTarefas = document.querySelector('#criar-tarefa');
// pegando minha lista
let lisDeTarefas = document.getElementById('lista-tarefas');

// criando uma função para add tarefas no trem
function addTarefa() {
  /* alert("funfou?"); */
  /* alert(textoTarefa); */
  let itemDaLista = document.createElement('li');
  itemDaLista.innerText = textoTarefa;
  lisDeTarefas.appendChild(itemDaLista);
}
// add o tal do evento de click
btnCriarTarefas.addEventListener('click', addTarefa);
