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
  let li = document.createElement('li');
  li.innerText = textoTarefa.value;
  lisDeTarefas.appendChild(li);
}
// add o tal do evento de click
btnCriarTarefas.addEventListener('click', addTarefa);
// TA FUNCIONANDO - POREM, NÃO PEGA O Q ESTÁ DENTRO DO INPUT???? E NEM ADD EM ULTIMO AAAAAAAAAAAAAAAAAAAAAAAAAAAAH
