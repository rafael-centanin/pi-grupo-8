let form = document.querySelector(".loginForm")

form.addEventListener("submit", function(e){
    e.preventDefault();


    let email = this.email.value;
    let password = this.password.value;

    if (email == "") {
        alert("El email no puede quedar vacio!")
    }else if (password == "") {
        alert("Introduzca su contraseña")
    }else {
        localStorage.setItem("email", email);
        location.href = "index.html"
    }

})