/* BOTÕES */
/* //BOTÃO DE ADICIONAR TAREFAS
//pegar meu botão */
const myButtonAdd = document.getElementById('criar-tarefa');
/* //agr eu chamo o evento? */
myButtonAdd.addEventListener('click', teste)
/* //minha função tem q pegar o valor digitado e add no final de uma lista???? */
function teste() {
/* /////primeiro criando a li? */
  const li = document.createElement('li')
  /* ////pegando valor? */
  const valorDigi = document.getElementById("criar-tarefa").value;
  /* ////add esse valor a li? */
    li.appendChild(valorDigi);

  console.log("funfou");
}

/* // criar-tarefa.addEventListener(click, addTarefasAoClicar) */
