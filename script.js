const nameOfGood = 'Черные джинсы с завышенной талией ASOS DESIGN Tall';
console.log('Наименование товара: ', nameOfGood);
const currenPrice = '44,38 $';
console.log('Актуальная цена: ', currenPrice);
const prevPrice = '55,53 $';
console.log('Цена до скидки: ', prevPrice);
const mainImage = 'https://images.asos-media.com/products/chernye-dzhinsy-s-zavyshennoj-taliej-asos-design-tall/10264367-1-cleanblk?$XXL$&wid=513&fit=constrain';
console.log('Главная фотография: ', mainImage);
const imagesUrl = [
    'https://images.asos-media.com/products/chernye-dzhinsy-s-zavyshennoj-taliej-asos-design-tall/10264367-1-cleanblk?$XXL$&wid=513&fit=constrain',
    'https://images.asos-media.com/products/chernye-dzhinsy-s-zavyshennoj-taliej-asos-design-tall/10264367-2?$XXL$&wid=513&fit=constrain',
    'https://images.asos-media.com/products/chernye-dzhinsy-s-zavyshennoj-taliej-asos-design-tall/10264367-3?$XXL$&wid=513&fit=constrain',
    'https://images.asos-media.com/products/chernye-dzhinsy-s-zavyshennoj-taliej-asos-design-tall/10264367-4?$XXL$&wid=513&fit=constrain',
];
console.log('Массив ссылок на все фотографии данного товара: ', imagesUrl);


//Если бы у меня был доступ к HTML документу, то информацию оттуда доставала бы таким способом:

//Если надо собрать массив значений:
const currentPriceContainers = document.querySelectorAll('.current-price');
const currentPriceTotal = [];
const newCurrentPriceContainers = [...currentPriceContainers];
newCurrentPriceContainers.map((el) => currentPriceTotal.push(el.textContent));

const prevPriceContainers = document.querySelectorAll('.product-prev-price');
const prevPriceTotal = [];
const newPrevPriceContainers = [...prevPriceContainers];
newPrevPriceContainers.map((el) => prevPriceTotal.push(el.textContent));

const nameOfGoodsContainers = document.querySelectorAll('.product-hero h1');
const nameOfGoodsTotal = [];
const newNameOfGoodsContainers = [...nameOfGoodsContainers];
newNameOfGoodsContainers.map((el) => nameOfGoodsTotal.push(el.textContent));

const containerForImages = document.querySelectorAll('.fullImageContainer img');
const newContainer = [...containerForImages];
const arrayOfSrc = [];
newContainer.map((el) =>  arrayOfSrc.push(el.getAttribute('src'))); 

//Если надо собрать одно значение:
// const currentPriceItem = document.querySelector('.current-price').textContent;
// const prevPriceItem = document.querySelector('.product-prev-price').textContent;
// const nameOfGoodItem = document.querySelector('.product-hero h1').textContent;
// const imageUrl = document.querySelector('.fullImageContainer img').getAttribute('src');
