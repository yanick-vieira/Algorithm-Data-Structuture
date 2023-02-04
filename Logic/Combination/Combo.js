

let nome = "Yanick"
let altura = 1.72;
let vezes = altura * altura;
let peso = 67;

let imc = peso / vezes;


if(imc > 24){
    console.log(nome + " você se encontra acima do peso")
}else if(imc < 18){
    console.log(nome +" você se encontra abaixo do peso")
}else{
    console.log(nome + " você encontra dentro do peso, parabens")
};
console.log("IMC igual a " + imc.toFixed(2));

