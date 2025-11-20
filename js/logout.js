let afuera = document.querySelector(".logout");
afuera.addEventListener('click', function (evento) {
    evento.preventDefault();
    localStorage.removeItem("data");
    window.location.href= "./login.html"

})
