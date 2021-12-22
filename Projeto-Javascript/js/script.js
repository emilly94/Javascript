
document.addEventListener('submit', function(event){
  event.preventDefault();

  if(document.getElementById('a').value == NaN || document.getElementById('a').value == ''){
    //document.getElementById('a').style.borderColor = "#faa";
    document.getElementById('msg').innerHTML = "Preencha o campo";
    setTimeout(function(){ 
      var msg = document.getElementById("msg");
      msg.parentNode.removeChild(msg);   
  }, 4000);
    
  }else if(document.getElementById('b').value == NaN || document.getElementById('b').value == ''){
    document.getElementById('msg').innerHTML = "Preencha o campo";
    setTimeout(function(){ 
      var msg = document.getElementById("msg");
      msg.parentNode.removeChild(msg);   
  }, 4000);
  }else if(document.getElementById('c').value == NaN || document.getElementById('c').value == ''){
    document.getElementById('msg').innerHTML = "Preencha o campo";
    setTimeout(function(){ 
      var msg = document.getElementById("msg");
      msg.parentNode.removeChild(msg);   
  }, 4000);
  }else{
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


   coluna1.innerHTML = nome;
   coluna2.innerHTML = nota1;
   coluna3.innerHTML = nota2;
   coluna4.innerHTML = nota3;
   coluna5.innerHTML = media;

}

//colocar o campo de entrada e partir dele fazer o calculo(usar validacao)
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