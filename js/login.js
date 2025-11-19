let formulario = document.querySelector(".loginForm")



formulario.addEventListener("submit", function(e){
    e.preventDefault();

    let email = this.email.value;
    let password = this.email.value;


    if (email.value == "") {
        alert("Ingrese su email")
    }else if (password.value == "") {
       alert("ingrese su password")
    }else if (password.value.length < 6) {
        alert("La contrasena debe tener al menos 6 caracteres")
    }
     else {
        let usuario ={
            mail: email,
            contraseña: password
        }
        let usuString =JSON.stringify(usuario)
        localStorageStorage.setItem("data", usuString);
        this.submit()

    }

})