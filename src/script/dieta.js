const botaoDieta = document.querySelector("#gerarDieta");

botaoDieta.addEventListener("click", function () {
  GerarDieta();
});

//Gerador de dieta
function GerarDieta() {
  var resposta = document.querySelector("#resposta").value;
  var dietaEspecifica = document.querySelector("#dietaEspecificaContainer");
  var dieta = "";

  if (resposta == "none") {
    alert("Por favor, selecione uma opção válida.");
    dietaEspecifica.classList.add("hidden");
  } else {
    if (resposta == "perder_peso") {
      dieta +=
        "Uma dieta equilibrada para perda de peso deve focar em alimentos nutritivos e porções controladas. Opte por refeições ricas em vegetais, frutas, proteínas magras e grãos integrais. Evite alimentos processados, açúcares adicionados e gorduras saturadas. Mantenha-se hidratado com água e limite o consumo de bebidas açucaradas. Faça pequenas refeições ao longo do dia para manter o metabolismo ativo e evite beliscar entre as refeições. Lembre-se de incluir atividade física regularmente para potencializar os resultados. Consultar um nutricionista pode ajudar a adaptar a dieta às suas necessidades individuais.";
    }

    if (resposta == "ganhar_massa") {
      dieta =
        "Para ganhar massa muscular, é importante seguir uma dieta rica em proteínas, carboidratos saudáveis e gorduras insaturadas. Priorize alimentos como frango, peixe, ovos, carne magra, laticínios com baixo teor de gordura, leguminosas, nozes, sementes, aveia, arroz integral, batata-doce, frutas e vegetais. Consuma proteína suficiente para apoiar a reparação e o crescimento muscular, e carboidratos para fornecer energia durante os treinos. Faça refeições frequentes ao longo do dia e inclua um lanche pós-treino com proteína e carboidratos para ajudar na recuperação muscular. Beba bastante água para manter-se hidratado e evite alimentos processados e açúcares adicionados. Além disso, um programa de treinamento de força bem elaborado é essencial para estimular o crescimento muscular._consultar um nutricionista ou um profissional de educação física pode ajudar a elaborar um plano alimentar e de treino personalizado para atingir seus objetivos de ganho de massa muscular.";
    }

    dietaEspecifica.classList.remove("hidden");
    dietaEspecifica.innerText = dieta;
  }
}
