function art(element) {
  let txt = `
    <article>
       <img src="${element.images}" alt="${element.title}">
       <h2>${element.title}</h2>
       <h3>${element.description}</h3>
       <p>${element.price}</p>
       <p>  <a href="product.html?${element.id}"> ver detalle </a>
     </article>
    `;
    return txt;
}

const masVendidos = document.querySelector('.mas-vendidos')
const otrosProductos = document.querySelector('.otros-productos')
const categoryAll = document.querySelector('.cate-all')


fetch('https://dummyjson.com/products')
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);

  const produ = data.products;

  for (let i = 0; i<10; i++) {
    
    masVendidos.innerHTML += art(produ[i]);
    
  }
  for (let i = 10; i<produ.length; i++){
    
    otrosProductos.innerHTML += art(produ[i]);
  }
})
.catch(function(error) {
  console.log("Error: " + error);
})
