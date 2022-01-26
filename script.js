// BOTÕES
// pegando meu texto-tarefa.. input onde escreve a tarefa
let textoTarefa = document.getElementById('texto-tarefa');
// pegando meu criar-tarefa.. botao que add tarefas
let btnCriarTarefas = document.querySelector('#criar-tarefa');
// pegando minha lista
let lisDeTarefas = document.getElementById('lista-tarefas');
// pegando o botão apaga-tudo
let x = document.getElementById('apaga-tudo');
// pegando o botão mover-cima
let praCima = document.getElementById('mover-cima');
// pegando o botão mover-baixo
let praBaixo = document.getElementById('mover-baixo');
// pegando o botão remover-finalizados
let removeFinalizado = document.getElementById('remover-finalizados');
// pegando o botão remover-selecionado
let removeSelecionado = document.getElementById('remover-selecionado');
// pegando o  botão salvar-tarefas
let salvar = document.getElementById('salvar-tarefas');

// FUNÇÃO QUE ADD TAREFA
function addTarefa() {
  /* alert("funfou?"); */
  /* alert(textoTarefa); */
  let li = document.createElement('li');
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
  if (lisDeTarefas.innerText !== "") {
    lisDeTarefas.innerText = "";
  }
}
x.addEventListener('click', apagaTudo); // MEU BOTÃO FUNCIONA!!!!!!!!!!!!!!!!AAAAAAAAAAAAAAAA NÃO MEXE!!!!!!!!!!!!!!!!!!

// FUNÇÃO QUE..RISCA
// CRIANDO A FUNÇÃO
function risca(event) {
/*  let completo = document.querySelector('.completed'); */ // PEGANDO A CLASSE
// add a class completed
/*   completo.event.target.classList.add('completed'); */
  event.target.classList.toggle('completed');
// troquei add pelo toggle

// console.log('funfou')
} lisDeTarefas.addEventListener('dblclick', risca); // FUNCIONANDO, NÃO MEXE!!!!

// FUNÇÃO MUDAR COR
function corFundo(event) {
  // console.log(lisDeTarefas.children.length);
  for(let posi = 0; posi < lisDeTarefas.children.length; posi +=1) {
       lisDeTarefas.children[posi].style.backgroundColor = "";
      
  }

  event.target.style.backgroundColor = 'rgb(128, 128, 128)';

  

} lisDeTarefas.addEventListener('click', corFundo);


// FUNDO FICA CINZA --- MAS SELECIONA TUDO

// FUNÇÃO PRA REMOVER A COR DE FUNDO??????????????????????????
// function removerCor() {

//   for(let posi = 0; posi < lisDeTarefas.length; posi +=1) {
//     lisDeTarefas.children[posi].classList.remove('mudarCor');
//   }
// }

// FUNÇÃO DO BOTÃO REMOVER FINALIZADOS

// FUNÇÃO DO BOTÃO DE SALAVAR - RASCUNHO
// function localStorage(){
//   let ???????
//   // localStorage.setItem();
//   document.getElementById('texto-tarefa').value ?????????

// } salvar.addEventListener('click', localStorage);
