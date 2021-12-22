document.addEventListener('submit', function(event){
  event.preventDefault();

  var a = parseFloat(document.getElementById('a').value);
  var b = parseFloat(document.getElementById('b').value);
  var c = parseFloat(document.getElementById('c').value);

  const media = (a+b+c)/3;
  console.log(a);
  if(document.getElementById('a').value == NaN || document.getElementById('a').value == ''){
    document.getElementById('a').style.borderColor = "#faa";
    alert('Por favor preencha o campo em vermelho');
  }else if(document.getElementById('b').value == NaN || document.getElementById('b').value == ''){
    document.getElementById('b').style.borderColor = "#faa";
    alert('Por favor preencha do campo em vermelho');
  }else if(document.getElementById('c').value == NaN || document.getElementById('c').value == ''){
    document.getElementById('c').style.borderColor = "#faa";
    alert('Por favor preencha o campo em vermelho');
  }else{
    document.getElementById('resultado').innerHTML = "Resultado da média é: " + media;
  }
})

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