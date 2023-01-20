/*
function nomes(){
nome1 = "Yok";
nome2 = "Pok";

mesmo = (nome1 != nome2);

if(mesmo == true){
   console.log("Bem vindo "+ nome1 + " e " + nome2);
}else{
   console.log("Nomes iguais não permitidos");

};
}
console.log( typeof nomes);


var conta = "mostrar"

if(conta === "mostrar"){
   console.log(nomes());
}else{
   false;
};
*/

var n1 = Number.parseFloat("12.5");
var n2 = Number.parseFloat("11");
var n3 = Number.parseFloat("16.3");

var erro = [n1, n2 ,n3];

console.log("Resultado da pauta:");
for(var i = 0; i < erro.length; i++){
   console.log(erro[i] +  " Valor");
}


var pauta = (n1 + n2 + n3) /3;

if(pauta < 10 )
{
   console.log("A media deu " + Number.parseInt(pauta) + " valores e isso não chega para ser aprovado de ano!");
}else{
   console.log("Aprovado com sucesso com a media de " + Number.parseInt(pauta) + " valores !");
};

