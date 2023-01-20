import {getData} from './data.mjs';

const main = document.getElementById('main');

// так как изображение сейчас находится на бекграунде на этом блоке - я беру его, но ты это поменял и тебе нужно будет брать блок с картинкой
const imageBlock = document.getElementsByClassName('shop-window')[0];

const data = getData();
const currentId = localStorage.getItem('currentProduct');
const currentItem = data.find((element) => element.id === currentId);

const addListeners = () => {
    const radioInputs = document.getElementsByName('color-swicher');

    radioInputs.forEach((input) => {
        input.addEventListener('click', (event) => {
            console.log(event.target.value)
            const imageUrl = currentItem.variants.find((variant) => variant.name === event.target.value).image;
            imageBlock.style.backgroundImage = `url(${imageUrl})`;
        });
    });
};

const getSwitchers = (variants) => {
    if (variants) {
        let str = '';

        variants.forEach((variant) => {
            str += `<div class="switcher">
            <input
              class="switcher-input-${variant.name}"
              type="radio"
              id="${variant.name}"
              name="color-swicher"
              value="${variant.name}"
            />
            <label class="switcher-label-${variant.name}" for="${variant.name}"></label>
          </div>`
        });

        return str;
    }

    return '';
}

const draw = () => {
    const header = `<div class="clothe-discribe">
    <div class="discribe-head">
      <div class="clothes-sex">Men's T-Shirt</div>
      <div class="colors-choose">
        ${getSwitchers(currentItem.variants)}
      </div>
    </div>
    <div class="clothes-discribe">Black Crew Neck T-shirt</div>
  </div>`

    let str = header;

    main.innerHTML = str;
}

draw();
addListeners();