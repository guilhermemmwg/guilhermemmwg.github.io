function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var messageError = document.getElementById("messageError");
    var isValid = true;
  
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
  
    if (name === "") {
      nameError.textContent = "Por favor, insira seu nome.";
      isValid = false;
    }
  
    if (email === "") {
      emailError.textContent = "Por favor, insira seu email.";
      isValid = false;
    } else if (!isValidEmail(email)) {
      emailError.textContent = "Por favor, insira um email válido.";
      isValid = false;
    }
  
    if (message === "") {
      messageError.textContent = "Por favor, insira uma mensagem.";
      isValid = false;
    }
  
    return isValid;
  }
  
  function isValidEmail(email) {
    // Uma validação de email simples, pode ser melhorada dependendo dos requisitos.
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }
