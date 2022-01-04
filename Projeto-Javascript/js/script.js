
document.addEventListener('submit', function(event){
  event.preventDefault();

  /*
  *TODO: em msg1 usar class ao inves de ID para inserir a mensagem
  */
  if( document.getElementById('a').value == NaN || document.getElementById('a').value == ''){
    //document.getElementById('a').style.borderColor = "#faa";
    document.getElementById('msg1').innerHTML = "Preencha o campo - NOTA 1";
    console.log(msg1.value);
    setTimeout(function(){ 
      var msg = document.getElementById("msg1");
      msg.innerHTML = "";   
  }, 4000);}

  if( document.getElementById('b').value == NaN || document.getElementById('b').value == ''){
    console.log('valor de b' + b)
    document.getElementById('msg2').innerHTML = "Preencha o campo - NOTA 2";
    setTimeout(function(){ 
      var msg = document.getElementById("msg2");
      msg.innerHTML = ""; 
  }, 4000);}

  if(document.getElementById('c').value == NaN || document.getElementById('c').value == ''){
    console.log('valor de c' + c)
    document.getElementById('msg3').innerHTML = "Preencha o campo - NOTA 3";
    setTimeout(function(){ 
      var msg = document.getElementById("msg3");
      //msg.parentNode.removeChild(msg);
      msg.innerHTML = "";   
  }, 4000);}

  else if(document.getElementById('a').value != '' && document.getElementById('b').value != '' && document.getElementById('c').value != ''){
    //document.getElementById('resultado').innerHTML = "Resultado da média é: " + media;
   dadosMedia();
  }
})

//inserindo dados em uma tabela
function dadosMedia(){
   
   var nome   = document.getElementById('aluno').value;
   var nota1 = parseFloat(document.getElementById('a').value);
   var nota2 = parseFloat(document.getElementById('b').value);
   var nota3 = parseFloat(document.getElementById('c').value);
   const media = (nota1+nota2+nota3)/3;

   tabela = document.getElementById("tabela");


   var linha   = tabela.insertRow(-1);


   var coluna1 = linha.insertCell(0);
   var coluna2 = linha.insertCell(1);
   var coluna3 = linha.insertCell(2);
   var coluna4 = linha.insertCell(3);
   var coluna5 = linha.insertCell(4);

  if(nota1 != NaN || nota2 != NaN || nota3 != NaN){
   coluna1.innerHTML = nome;
   coluna2.innerHTML = nota1;
   coluna3.innerHTML = nota2;
   coluna4.innerHTML = nota3;
   coluna5.innerHTML = media;
  }
   

}

document.addEventListener('focusout', function(event){
  event.preventDefault();

  var nome = document.getElementById('aluno').value;
  var sobrenome = document.getElementById('sobrenome_aluno').value;

  if(nome == ''){
    
    document.getElementById('aluno').style.borderColor = "#fafa";
  }else{
    document.getElementById('aluno').style.borderColor = "#979797";
    
  }

  if(sobrenome == ''){
    document.getElementById('sobrenome_aluno').style.borderColor = "#fafa";
  }else{
    document.getElementById('sobrenome_aluno').style.borderColor = "#979797";
  }
})

/*
* TODO:colocar o campo de entrada e partir dele fazer o calculo(usar validacao)
*/
function calcularQuantidadePrestacao(){
  var valor = 30000;
  var prestacao = 750; //36
  var entrada = 3000;
  var restante = 30000 - 3000;

  for(i=0; i<=50; i++){
    //console.log(prestacao*i);
    if(prestacao*i == restante){
    	console.log(i);
    }
  }
}