fetch('https://dummyjson.com/products?limit=194')
.then(function(response) {
  return response.json()
})
.then(function(data){
    let lista = data.products;

    let queryString = location.search;
    let qsobj = new URLSearchParams(queryString);
    let idProducto = qsobj.get('pjId');

    let texto = document.querySelector("section.product-main");
    texto.innerHTML = "";

    for (let i = 0; i < lista.length; i++) {
        if (lista[i].id == idProducto) {
            texto.innerHTML +=   `
            <article>
                <img src="${lista[i].thumbnail}" alt="${lista[i].title}">
                <h2>${lista[i].title}</h2>
                <h3>${lista[i].description}</h3>
                <p>${lista[i].price}</p>
                <p>${lista[i].category}</p>
                <p>${lista[i].stock}</p>
                <p>${lista[i].tags}</p>
            </article>
            `;
        }
    }
})
.catch(function(error){
    console.log("Error: " + error);
});



