const menu = document.querySelector('#menu-interativo');
const navLinks = document.querySelector('#navLinks');
const resultado = document.querySelector('#resultIMC');



menu.addEventListener('click', () => {
  menu.classList.toggle('menu-ativo');
  navLinks.classList.toggle('nav-ativo')
});

document.getElementById("calculaIMC").addEventListener("click", function(){

  calculadoraIMC(event); 

});

function calculadoraIMC(event) {
  var Kilo = document.getElementById("kilo").value;
  var altura = document.getElementById("Altura").value;
  var kg = parseFloat(Kilo);
  var metro = parseFloat(altura);
  var mensagemIMC = document.getElementById("resultIMC");

  var IMC = (kg / (metro*metro)).toFixed(2);

  if (IMC < 18.5 ) {
    mensagemIMC.innerHTML = "Seu IMC é " + IMC + " e você está ABAIXO do peso.";
  }else if(IMC <= 24.9) {
    mensagemIMC.innerHTML = "Seu IMC é " + IMC + " e seu peso está NORMAL."
  }else if (IMC <= 29.9){
    mensagemIMC.innerHTML = "Seu IMC é " + IMC + " e você está com PRÉ-OBESIDADE."
  }else if (IMC <= 34.9 ){
    mensagemIMC.innerHTML = "Seu IMC é " + IMC + " e você está com grau de OBESIDADE 1"
  }else if (IMC <= 39.9 ){
    mensagemIMC.innerHTML = "Seu IMC é " + IMC + " e você está com grau de OBESIDADE 2"
  }else if (IMC >= 40 ){
    mensagemIMC.innerHTML = "Seu IMC é " + IMC + " e você está com grau de OBESIDADE 3"
  } else {
    mensagemIMC.innerHTML = "Por favor, digite um número válido.";
  }




  event.preventDefault();

} 