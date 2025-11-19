let formulario = document.querySelector(".loginForm");



formulario.addEventListener("submit", function(e){
    e.preventDefault();

    let email = this.email.value;
    let password = this.contraseña.value;


    if (email == "") {
        alert("Ingrese su email")
    }else if (password == "") {
       alert("ingrese su password")
    }else if (password.length < 6) {
        alert("La contrasena debe tener al menos 6 caracteres")
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