let submitB = document.querySelector(".formCenter")

submitB.addEventListener("submit", function (event) {
    event.preventDefault();

    if (this.buscador.value.length < 3) {

        alert("La busqueda debe tener mas de 3 caracteres");

    }else{
        this.submit()
    }


})
