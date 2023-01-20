import {getData} from './data.mjs';

const products = document.getElementById('products');
const data = getData();

const addListeners = () => {
  const clothesElements = document.querySelectorAll('[data-product]');

  clothesElements.forEach((element) => {
    console.log(element);
    element.addEventListener('click', () => {
      localStorage.setItem('currentProduct', element.id);
    });
  })
};

const draw = () => {
    let str = '';
    data.forEach((product) => {
        const item = `<a href="./product-details.html" class="clothes-name"><div class="clothes" id="${product.id}" data-product="true">
        <div class="clothes-show">
          <img src="${product.image}" alt="">
        </div>
        <span class="clothes-name">${product.title}
        <p class="clothes-price">${product.price}</p>
      </div></a>`

      str += item;
    });

    products.innerHTML = str;
}

draw();
addListeners();
