function art(element) {
  let txt = `
    <article>
       <img src="${element.images}" alt="${element.title}">
       <h2>${element.title}</h2>
       <h3>${element.description}</h3>
       <p>${element.price}</p>
       <p>  <a href="product.html?pjId=${element.id}"> ver detalle </a>
     </article>
    `;
    return txt;
}

const masVendidos = document.querySelector('.mas-vendidos')
const otrosProductos = document.querySelector('.otros-productos')
const categoryAll = document.querySelector('.cate-all')


fetch('https://dummyjson.com/products/category/sports-accessories')
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);

  const produ = data.products;

  for (let i = 0; i<10; i++) {
    
    masVendidos.innerHTML += art(produ[i]);
    
  }

})
.catch(function(error) {
  console.log("Error: " + error);
})

fetch('https://dummyjson.com/products/category/motorcycle')
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);

  const produ = data.products;

  for (let i = 0; i<10; i++) {
    
    otrosProductos.innerHTML += art(produ[i]);
    
  }
  
})
.catch(function(error) {
  console.log("Error: " + error);
})

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

