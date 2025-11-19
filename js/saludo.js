let data = localStorage.getItem("data");
let dataObj = JSON.parse(data)


let saludo = document.querySelector(".saludar");
let login = document.querySelector(".loginVista");
let register = document.querySelector(".registerVista")


if (dataObj) {
    saludo.innerHTML = `Bienvenido: ${dataObj.mail}`
    logout.innerHTML = `<a href="./login.html">logout</a>`


}

