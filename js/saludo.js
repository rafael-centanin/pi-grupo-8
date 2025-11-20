let data = localStorage.getItem("data");
let dataObj = JSON.parse(data)


let saludo = document.querySelector(".saludar");
let usuarNav = document.querySelector(".usuario")


if (dataObj) {
    saludo.innerHTML = `Bienvenido: ${dataObj.mail}`
    usuarNav.innerHTML = `
    <a href="./index.html">Home</a>
    <a href="./login.html" class="logout">logout</a>
    `

}

