const menu = document.querySelector('#menu-interativo');
const navLinks = document.querySelector('#navLinks');
const resultado = document.querySelector('#resultIMC');
const links1 = document.querySelector('#link1');
const links2 = document.querySelector('#link2');
const links3 = document.querySelector('#link3');
const links4 = document.querySelector('#link4');
const links5 = document.querySelector('#link5');


menu.addEventListener('click', () => {
  menu.classList.toggle('menu-ativo');
  navLinks.classList.toggle('nav-ativo')
});

links1.addEventListener('click', () => {
  menu.classList.remove('menu-ativo');
  navLinks.classList.remove('nav-ativo')
} )

links2.addEventListener('click', () => {
  menu.classList.remove('menu-ativo');
  navLinks.classList.remove('nav-ativo')
} )

links3.addEventListener('click', () => {
  menu.classList.remove('menu-ativo');
  navLinks.classList.remove('nav-ativo')
} )

links4.addEventListener('click', () => {
  menu.classList.remove('menu-ativo');
  navLinks.classList.remove('nav-ativo')
} )

links5.addEventListener('click', () => {
  menu.classList.remove('menu-ativo');
  navLinks.classList.remove('nav-ativo')
} )


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

};

document.getElementById("calculaTMB").addEventListener("click", function(){
calculadoraTMB()
});

function calculadoraTMB(){

  var kg = document.getElementById("kiloTMB").value;
  var alt = document.getElementById("AlturaTMB").value;
  var idd = document.getElementById("IdadeTMB").value;
  var sexo = document.getElementById("genero").value;
  var peso = parseFloat(kg);
  var altura = parseFloat(alt);
  var idade = parseFloat(idd);
  var genero = sexo;
  var TMB = "";

  var mensagemTMB = document.getElementById("resultTMB");
  
  if (genero == "masculino") {
    
    TMB = 88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * idade);
    
    mensagemTMB.innerHTML = 'Sua taxa metabólica basal é ' + TMB + 'calorias';

  } else if (genero == "feminino") {

    TMB =  (10 * peso) + (6.25 * altura) - (5 * idade) - 161;

    mensagemTMB.innerHTML = 'Sua taxa metabólica basal é ' + TMB + 'calorias';

  } else{

    mensagemTMB.innerHTML = 'Por favor, selecione seu gênero.';

  }

  event.preventDefault();

}


document.getElementById("calculaPeso").addEventListener("click", function(){
  calculadoraPesoIdeal();
});

function calculadoraPesoIdeal() {
  
  var sexoPI = document.getElementById("generoPI").value;
  var alturaPI = document.getElementById("AlturaPI").value;
  var genero = sexoPI;
  var altura = parseFloat(alturaPI);
  var exibeResultPI = document.getElementById("resultPI");
  var resultadoPI = ""

  if (genero == "masculino"){

   var resultadoPI = (50 + (0.91 * (altura - 152.4))).toFixed(2);

   exibeResultPI.innerHTML = 'Seu peso ideal é ' + resultadoPI;

  } else if (genero == "feminino") {

  var resultadoPI = (45.5 + (0.91 * (altura - 152.4))).toFixed(2);

  exibeResultPI.innerHTML = 'Seu peso ideal é ' + resultadoPI;

  } else {
    mensagemTMB.innerHTML = 'Por favor, selecione seu gênero.';
  }

}

