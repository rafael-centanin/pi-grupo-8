function art(element) {
  let txt = `
    <article>
       <img src="${element.thumbnail}" alt="${element.title}">
       <h2>${element.title}</h2>
       <h3>${element.description}</h3>
       <p>${element.price}</p>
       <p>  <a href="product.html?pjId=${element.id}"> ver detalle </a>
     </article>
    `; 
    return txt;
}
    let queryString = location.search;
    let qsobj = new URLSearchParams(queryString);
    let idProducto = qsobj.get('pjId'); 
   fetch('https://dummyjson.com/products/category/'+idProducto)
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);

const masVendidos = document.querySelector('.mas-vendidos')

console.log(data.products)
let lista = data.products;

    
console.log(lista.length);
for (let i = 0; i<lista.length; i++) {
    masVendidos.innerHTML += art(lista[i])
  }

})
.catch(function(error) {
  console.log("Error: " + error);
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

