import {getData} from './data.mjs';

const products = document.getElementById('products');
const data = getData();

const draw = () => {
    let str = '';
    data.array.forEach((product) => {
        const item = `<div class="clothes">
        <div class="clothes-show">
          <img src="${product.image}" alt="">
        </div>
        <a href="" class="clothes-name">${product.title}</a>
        <p class="clothes-price">${product.price}</p>
      </div>`

      str += item;
    });

    products.innerHTML = str;
}

draw();