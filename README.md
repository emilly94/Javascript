# Javascript

##Lista de Exercicios

1-Descreva um Algoritmo para resolver o problema da travessia de modo 'seguro':

Um homem precisa atravessar um rio com um barco que possui capacidade para carregar ele mesmo e mais um de seus três pertences, que são:
um lobo, uma cabra e um maço de alfafa. Em cada viagem só poderá ir o homem e apenas um de seus pertences.
A seguinte regra dever ser respeitada: o lobo nao pode ficar sozinho com a cabra e nem a cabra sozinha com o maço de alfafa. Escreva um algoritmo para fazer a travessia dos pertences que estao em uma margem do rio para a outra.

##Resposta
  1. o homem no barco na margem do rio pega o primeiro pertence que seria a cabra;
  2. o homem leva a cabra no barco para a outra margem do rio;
  3. o homem deixa a cabra em terra firme e volta para pegar o outro pertence;
  4. o homem chega na margem do rio e pega o outro pertence que seria o lobo;
  5. o homem atravessa com o outro para a outra margem do rio;
  6. o homem deixa o logo em terra firme e pega a cabra para ir buscar o terceiro pertence;
  7. o homem outra para buscar o terceiro pertence com a cabra;
  8. o homem deixa a cabra na margem do rio e pega o maço de alfafa;
  9. o homem deixa o maço de alfafa na margem do rio com o logo e volta para buscar a cabra;
  10. o homem busca a cabra enqaunto da margem do rio deixou o lobo e o maço de alfafa.
  
2- JS: Exibir media de 3 numeros com entradas pelo formulario HTML.
  ```
  function calculoMedia(){
      var a = parseInt(document.getElementById('a').value);
      var b = parseInt(document.getElementById('b').value);
      var c = parseInt(document.getElementById('c').value);

      const media = (a + b+ c)/3;
      document.getElementById('resultado').innerHTML = "Resultado da média é: " + media;
    }
  ```
  
3-Resolva as operações:
  * 10 + 15 = 25;
  * "10" + 2 = '102';
  * "10" * 2 = 20;
  * "10" / 3 = 3.33333;
  * "10" % 3 = 1;
  * 10 + true = 11;
  * 10 == "10" = true;
  * 10 === "10" = false;
  * 10 < 11 = true;
  * 10 > 12 = false;
  * 10 <= 10.1 = true;
  * 10 > 9.99 = true;
  * 10 != "dez" = false;
  * "dez" + true = 'deztrue';
  * 10 + false = 10;
  * 10 * false = 0;
  * true + true = 2;
  * 10++ = 11;
  * 10-- = 9;
  * 1 & 1 = 11;
  * 1 & 0 = 10;
  * 0 & 0 = 00;
  * 0 / 1 = 0;
  * 5 + 5 === 10 = true;
  * "5" + "5" == 10 = false;
  * "5" * 2 > 9 = true;
  * (10+10) * 2 = 40;
  * 10 + 10 * 2 = 30;

4-Responda as perguntas de acordo com as variaveis:
var branco = "preto";
var preto = "cinza";
var cinza = "branco";
var carro = "preto";
var valor = 30000;
var prestacao = 750;

a) branco == "branco"
  * =false;
  
b) branco == cinza
  * =false;
  
c) carro == branco
  * =true
  
d) var cavalo = carro == "preto" ? "cinza" : "marrom"
  *carro = "cinza";
  
e) Quantas prestacoes sao necessarias para pagar o valor do carro com a entrada de 3000? Demostre a operacao.
   ```
  
  function calcularQuantidadePrestacao(){
  var valor = 30000;
  var prestacao = 750; //36
  var entrada = 3000;
  var restante = 30000 - 3000;

  for(i=0; i<=50; i++){
    //console.log(prestacao*i);
    if(prestacao*i == restante){
    	console.log(i); //36
    }
  }
}
```
  
f) Somando as variaveis de cores e formada uma string de quantos caracteres?
  ```
  var branco = "preto";
  var preto = "cinza";
  var cinza = "branco";
  
  var cores = branco+preto+cinza;
  
  console.log(cores.length); //16
  ```
   
