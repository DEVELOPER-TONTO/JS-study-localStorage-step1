//array

// let car = ['소나타' , 50000 , 'white'];
// car[3] = '아반떼';

//object - 이름을 붙여야함

// let car2 = {name : '소나타' , price : [50000 , 30000]}
// document.querySelector('.p-3').innerHTML = car2['name'] + " / " + car2['price'];
// document.querySelector('.p-3').innerHTML = car2.price[1];
// car2.price = 60000;
// console.log(car2['name']);

//카드 데이터 바인딩
let card = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

// for(let i = 0; i<3; i++){
//     document.querySelectorAll('.card-title')[i].innerHTML = card[i].title;
//     document.querySelectorAll('p')[i].innerHTML = `가격은: ${card[i].price}`;
// }

//카드생성

card.forEach(function (a, k) {
  let temPlate = `<div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100">
    <h5>${card[k].title}</h5>
    <p>가격 : ${card[k].price}</p>
  </div>`;
  $(".row").append(temPlate);
});

//더보기
//2번누르면 또 새 상품 가져옴

let count = 0;

document.querySelector("#more").addEventListener("click", function () {
  count += 1;

  $.get("https://codingapple1.github.io/js/more1.json").done((data) => {
    if (count == 1) {
      for (let i = 0; i < data.length; i++) {
        let temPlate = `<div class="col-sm-4">
            <img src="https://via.placeholder.com/600" class="w-100">
            <h5>${data[i].title}</h5>
            <p>가격 : ${data[i].price}</p>
          </div>`;
        $(".row").append(temPlate);
      }
    }
  });

  $.get("https://codingapple1.github.io/js/more2.json").done((data) => {
    if (count == 2) {
      for (let i = 0; i < data.length; i++) {
        $(".row").append(`<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${data[i].title}</h5>
        <p>가격 : ${data[i].price}</p>
      </div>`);
        document.querySelector("#more").style.display = "none";
      }
    }
  });
});

//get 방식

// $.get('https://codingapple1.github.io/price.json').done(function(data){
//     console.log(data.price);
// }).fail(function(){
//     console.log('실패');
// });

// fetch('https://codingapple1.github.io/price.json')
// .then(res => res.json()) //json object 변환
// .then(data => {
//     console.log(data)
// })
// .catch(error => {
//     console.log(error)
// });
