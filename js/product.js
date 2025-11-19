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

            texto.innerHTML += `
            <section class= "reviews">
            <h3>Opiniones del publico</h3>
            </section>
            `;
            
            let opiniones = document.querySelector(".reviews")
            let usuREv = lista[i].reviews;


            for (let i = 0; i < usuREv.length; i++) {
                opiniones.innerHTML += `
                <div class= "reviewDeUsuario">
                <p>⭐ Rating: ${usuREv[i].rating}</p>
                <p>Comentario: ${usuREv[i].comment}</p>
                <p>Fecha: ${usuREv[i].date}</p>
                <p>Usuario: ${usuREv[i].reviewerName}</p>
                </div>
                `;
            }


        }
    }
})
.catch(function(error){
    console.log("Error: " + error);
});


//barra aside category
const categoryAll = document.querySelector('.cate-all');
function cat(element) {
  let txt = `
    <article>
       <p> <a href="category.html?pjId=${element.slug}"> ${element.name} </a>
     </article>
    `;
    return txt;
}
 


fetch('https://dummyjson.com/products/categories')
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);

  for (let i = 0; i<data.length; i++) {
    categoryAll.innerHTML += cat(data[i]);
    
  }

})
.catch(function(error) {
  console.log("Error: " + error);
})
