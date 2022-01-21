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
  li.innerText = textoTarefa.value; // como sou lerda, estava add o .value lá em cima kkkkkkkkkk é testando q se aprende (y)
  lisDeTarefas.appendChild(li);

  document.getElementById('texto-tarefa').value = ''; // redefinindo valor, pra poder limpar a caixinha
}
// FUNÇÃO PRA MUDAR A COR AO CLICAR AAAAAAAAAAAAAAAAAAAAAAH
function mudarCor() {

}

// add o tal do evento de click
btnCriarTarefas.addEventListener('click', addTarefa);
// ENTENDI ERRADO??? NÃO SEI, MAS TA FUNCIONANDO KKKKKKK <33333
// NÃO MEXE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
