let registrar = document.querySelector(".registrarlo");
let gmail = document.querySelector(".gmail");
let pass1 = document.querySelector(".pass1");
let pass2 = document.querySelector(".pass2");
let terms = document.querySelector(".terminosCondiciones"); 
let error = document.querySelector(".mensajeError")

registrar.addEventListener("submit", function(event) {
    event.preventDefault();
    if (gmail.value == "") {
        error.innerHTML="El campo gmail esta vacio"
        return;
    }
    if (pass1.value == "") {
        error.innerHTML="El campo contraseña esta vacio"
        return;
    }
    if (pass1.value.length < 6) {
        error.innerHTML="La contraseña debe tener al menos 6 caracteres";
        return;
    }
    if (pass1.value != pass2.value) {
        error.innerHTML="Las contraseñas no coinciden";
        return;
    }
    else {
        this.submit();
    }
})
