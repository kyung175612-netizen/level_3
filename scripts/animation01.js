/* animation01.js */
// item에 마우스를 올리면 img 태그 경로가 다른 이미지로 변경
//변수
const item1 = document.querySelector('.item');
const item1Img = document.querySelector('.item img');

const sale1 = document.querySelector('.sale');
const sale1Img = document.querySelector('.sale img');

//변수테스트
console.log(item1, item1Img);

console.log(sale1, sale1Img);

//함수
function item1ImgSrc(){
    item1Img.src = 'https://image.uniqlo.com/UQ/ST3/kr/imagesgoods/483512/item/krgoods_69_483512_3x4.jpg?width=300';
}
function item1ImgSrcOut(){
    item1Img.src = 'https://image.uniqlo.com/UQ/ST3/kr/imagesgoods/475647/item/krgoods_42_475647_3x4.jpg?width=300';
}

function sale1ImgSrc(){
    sale1Img.src = 'https://image.uniqlo.com/UQ/ST3/kr/imagesgoods/483890/item/krgoods_15_483890_3x4.jpg?width=300';
}

//이벤트
item1.addEventListener('mouseover',item1ImgSrc);
item1.addEventListener('mouseout',item1ImgSrcOut);

sale1.addEventListener('mouseover',sale1ImgSrc);