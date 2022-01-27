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
//

// FUNÇÃO DO BOTÃO REMOVER FINALIZADOS - removeFinalkizado

function removerFinalizado() {
  let liFilho = '';
 for(let posi = lisDeTarefas.children.length -1; posi >= 0; posi -= 1) {
  //  console.log(lisDeTarefas.childNodes[posi].classList[0]);
  if(lisDeTarefas.children[posi].classList[0] === 'completed') {
     liFilho = lisDeTarefas.children[posi];
    
    lisDeTarefas.removeChild(liFilho);
    
  }
 }
}
  removeFinalizado.addEventListener('click', removerFinalizado);
// FUNÇÃO DO BOTÃO DE SALAVAR - RASCUNHO

// function localStorage(){
//   let ???????
//   // localStorage.setItem();
//   document.getElementById('texto-tarefa').value ?????????

// } salvar.addEventListener('click', localStorage);

// FUNÇÃO DO BOTÃO CIMA
function moverCima() {
  let irmaoSelecionado = '';
  let irmaoDeCima = '';
  for(let posi = 0; posi < lisDeTarefas.children.length; posi += 1) {
    if(lisDeTarefas.children[posi].previousSibling.innerText != undefined && lisDeTarefas.children[posi].style.backgroundColor === 'rgb(128, 128, 128)') {
      console.log('funfou');
      irmaoDeCima = lisDeTarefas.children[posi].previousSibling.innerText;

      irmaoSelecionado = lisDeTarefas.children[posi].innerText;

      lisDeTarefas.children[posi].previousSibling.innerText = irmaoSelecionado;

      lisDeTarefas.children[posi].innerText = irmaoDeCima;

      lisDeTarefas.children[posi].previousSibling.style.backgroundColor = 'rgb(128, 128, 128)';

      lisDeTarefas.children[posi].style.backgroundColor = '';
    } 
  }
} praCima.addEventListener('click', moverCima);

// FUNÇÃO DO BOTÃO BAIXO
// function moverBaixo() {

// } praBaixo.addEventListener('click', moverBaixo);
