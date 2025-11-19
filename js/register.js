let registrar = document.querySelector(".registrarlo");
let gmail = document.querySelector(".gmail");
let pass1 = document.querySelector(".pass1");
let pass2 = document.querySelector(".pass2");
let terms = document.querySelector(".terminosCondiciones"); 

registrar.addEventListener("submit", function(event) {
    event.preventDefault();
    if (gmail.value == "") {
        alert("El campo gmail esta vacio");
        return;
    }
    if (pass1.value == "") {
        alert("El campo contraseña esta vacio");
        return;
    }
    if (pass1.value.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres");
        return;
    }
    if (pass1.value != pass2.value) {
        alert("Las contraseñas no coinciden");
        return;
    }
    else {
        this.submit();
    }
})
