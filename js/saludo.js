let data = localStorage.getItem("data")
let dataObj = JSON.parse(data)


let saludo = document.querySelector(".saludar")
let logout = document.querySelector(".logout")
let links = document.querySelector(".derecha")


if (dataObj) {
    saludo.innerHTML = `Bienvenido: ${dataObj.email}`
    logout.innerHTML = `<a href="./login.html">logout</a>`
    links.innerHTML = `<li></li>
                       <li></li>`
}

