let formulario = document.querySelector(".loginForm");
let error = document.querySelector(".mensajeError")


formulario.addEventListener("submit", function(e){
    e.preventDefault();

    let email = this.email.value;
    let password = this.contraseña.value;


    if (email == "") {
        error.innerHTML = "Complete el campo email"
    }else if (password == "") {
       error.innerHTML = "Complete el campo password"
    }else if (password.length < 6) {
        error.innerHTML = "La contrasena debe tener al menos 6 caracteres"
    }
     else {
        let usuario ={
            mail: email,
            contraseña: password
        }
        let usuString =JSON.stringify(usuario)
        localStorage.setItem("data", usuString);
        this.submit()

    }

})