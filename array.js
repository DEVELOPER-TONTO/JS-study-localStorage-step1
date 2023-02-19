function addJavascript(jsname) {
  var th = document.getElementsByTagName("head")[0];

  var s = document.createElement("script");

  s.setAttribute("type", "text/javascript");

  s.setAttribute("src", jsname);

  th.appendChild(s);
}

addJavascript("ar.js");

let array = [7, 4, 5, 6, 3];
let 가다나 = ["가", "나", "다"];

let carding = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

//함수축약
function 축약쓰(y) {
  y.forEach(function (i, k) {
    let temp = `<div class="col-sm-4">
              <img src="https://via.placeholder.com/600" class="w-100">
            <h5>${y[k].title}</h5>
             <p>가격 : ${y[k].price}</p>
            </div>`;
    $(".row").append(temp);
  });
}

/* sort */
// array.sort(function(a,b){
//     // return a-b (오름차순) return b-a (내림차순)
// });
// console.log(array);

//문자 다나가 순 가나다순은 .sort()
// 가다나.sort(function(a,b){
//     if(a<b){
//         return 1; // 문자를 부등호비교
//     }
//     else return -1;
// });

// console.log(가다나);

/* filter */
// 원본을 변형해서 사용하지 않아서 변수에 옮겨야됨

// let 변수저장해서쓰셈 = array.filter(function(a){
//     return a < 4
// });
// console.log(변수저장해서쓰셈);

/* map */
//전부 리턴값에 맞게 변경
// let 변수저장해서쓰셈2 = array.map(function(a){
//     return a * 4  //다 4씩 곱해줌
// });
// console.log(변수저장해서쓰셈2);

// 가격순 정렬
// $('#PRS').click(function(){
//     card.sort(function(a,b){
//         return a.price-b.price;
//     });

//     document.querySelector('.row').innerHTML='';

//     card.forEach(function (a, k) {
//         let temPlate = `<div class="col-sm-4">
//           <img src="https://via.placeholder.com/600" class="w-100">
//           <h5>${card[k].title}</h5>
//           <p>가격 : ${card[k].price}</p>
//         </div>`;
//         $(".row").append(temPlate);
//       });
// });

// 상품명 다나가순 정렬
$("#WS").click(function () {
  carding.sort(function (a, b) {
    if (a.title < b.title) {
      return 1;
    }
    if (a.title > b.title) {
      return -1;
    }
  });

  document.querySelector(".row").innerHTML = "";

  축약쓰(carding);
});

//6만원 이하 상품만 보기
$("#PRS").click(function () {
  let carder = carding.filter(function (a) {
    return a.price <= 60000;
  });

  document.querySelector(".row").innerHTML = "";

  축약쓰(carder);
});
