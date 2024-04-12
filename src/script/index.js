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

  if (!isNaN(kg && metro)) {
    mensagemIMC.innerHTML = "Seu IMC é: " + (kg / (metro*metro));
  } else {
    mensagemIMC.innerHTML = "Por favor, digite um número válido.";
  }
  
  event.preventDefault();

} 