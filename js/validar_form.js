function validarFormulario() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var peloMenosUmaSelecionada = false;

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            peloMenosUmaSelecionada = true;
            if (checkboxes[i].id > 1) {
                alert("Selecione pelo menos uma opção antes de enviar o formulário.");
                return false;
            }
            if (checkboxes[i].id === "opcao1") {
                window.location.href = "sintomas/ansiedade.html"; 
                return false; 
            }
            if (checkboxes[i].id === "opcao2") {
                window.location.href = "sintomas/depressao.html"; 
                return false; 
            }
            if (checkboxes[i].id === "opcao3") {
                window.location.href = "sintomas/ta.html"; 
                return false; 
            }
            if (checkboxes[i].id === "opcao4") {
                window.location.href = "sintomas/bipolaridade.html"; 
                return false; 
            }
            if (checkboxes[i].id === "opcao5") {
                window.location.href = "sintomas/toc.html"; 
                return false; 
            }
            if (checkboxes[i].id === "opcao6") {
                window.location.href = "sintomas/esquizofrenia.html"; 
                return false; 
            }
            break;
        }
        
    }

    if (!peloMenosUmaSelecionada) {
        alert("Selecione pelo menos uma opção antes de enviar o formulário.");
        return false; // Impede o envio do formulário
    }

    
    // Se a validação for bem-sucedida, redirecione para outra página
    //  window.location.href = "artigo.html";
    //  return false;

}

//  if (selecoes.includes("opcao1") && selecoes.includes("opcao2")) {
//      window.location.href = "pagina1.html";
//  } else if (selecoes.includes("opcao3") && selecoes.includes("opcao4")) {
//      window.location.href = "pagina2.html";
//  } else {
//      alert("Seleção inválida. Escolha as opções corretas.");
//      return false;
//  }

// window.location.href = "artigo.html";
//     return false;