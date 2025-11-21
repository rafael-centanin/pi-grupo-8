
    
 let queryString = location.search;
 let qsobj = new URLSearchParams(queryString);
 let busc = qsobj.get('buscador'); 



fetch('https://dummyjson.com/products/search?q='+busc)
.then(function(response) {
  return response.json()
})
.then(function(data) {
   let lista = data.products;
 
let texto = document.querySelector(".mas-vendidos");
    texto.innerHTML = ''
 if (lista.length > 0 )
    for (let i = 0; i < lista.length; i++) 
       {
          texto.innerHTML +=   `
            <article>
                <img src="${lista[i].thumbnail}" alt="${lista[i].title}">
                <h2>${lista[i].title}</h2>
                <h3>${lista[i].description}</h3>
                <p>${lista[i].price}</p>
                <p>${lista[i].category}</p>
                <p>${lista[i].stock}</p>
                <p>${lista[i].tags}</p>
                <p>  <a href="product.html?pjId=${lista[i].id}"> ver detalle </a>
            </article>
            `;
        }
    else 
        texto.innerHTML = "<h1>No hay resultados para el término:"+busc+"</h1>"


})
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