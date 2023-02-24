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

let carding2 = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

let go = [];



//함수축약
function 축약쓰(y) {
  y.forEach(function (i, k) {
    let temp = `<div class="col-sm-4">
              <img src="https://via.placeholder.com/600" class="w-100">
            <h5>${y[k].title}</h5>
             <p>가격 : ${y[k].price}</p>
             <button class="buy">구매</button>
            </div>`;
    $(".row").append(temp);
  });
}

//형제요소찾기
function siblings(t) {
  var children = t.parentElement.children;
  var tempArr = [];

  for (var i = 0; i < children.length; i++) {
    tempArr.push(children[i]);
  }

  return tempArr.filter(function(e){
    return e != t;
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
let W_count = 0;
$("#WS").click(function () {
  carding.sort(function (a, b) {
    W_count+=1;
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

// 가나다순 정렬

$("#GWS").click(function () {
  carding2.sort(function(a,b){
    if(a.title > b.title){
      return 1;
    }
    else {
      return -1;
    }
  });
  document.querySelector(".row").innerHTML = "";

  축약쓰(carding2);
});

// 되돌리기
$("#RE").click(function () {
  
  document.querySelector(".row").innerHTML = "";

  축약쓰(card);
});

//value 가격이하로 정렬
$("#yee").click(function () {
  let carder = carding.filter(function (a) {
    return a.price <= document.querySelector('#yeah').value;
  });

  document.querySelector(".row").innerHTML = "";

  축약쓰(carder);
});



//6만원 이하 상품만 보기
$("#PRS").click(function () {
  let carder = carding.filter(function (a) {
    return a.price <= 60000;
  });

  document.querySelector(".row").innerHTML = "";

  축약쓰(carder);
});

//구매를 눌렀을 때 로컬스토리지에 저장
//array ver - car.html과 호환

// $('.buy').click(function(e){
//   let tar = $(e.target).siblings('h5').text();
//   if(localStorage.getItem('cart') != null){
//     let zoob = JSON.parse(localStorage.cart);
//     if(zoob.includes(tar)){ // 중복체크
//       return alert('응 안돼');
//     }
//     else{
//       zoob.push(tar);
//       localStorage.setItem('cart', JSON.stringify(zoob));
//     }
//     //전전요소찾기
//     // e.target.previusElementSibling.previusElementSibling
//   }
//   else{
//     localStorage.setItem('cart', JSON.stringify([tar]));
//     alert('등록완료');
//   }
// });

//object ver - count 추가가 안됨

$('.buy').click(function(e){
  let tar = $(e.target).siblings('h5').text();
  if(localStorage.getItem('cart') != null){
    let zoob = JSON.parse(localStorage.cart);
    let newCart = zoob.filter(function(a){
      return a.name == tar;
    });
    if(zoob.includes(tar)){ // 중복될때
      zoob.count+=1;
      //?모름
      localStorage.setItem('cart', JSON.stringify(zoob));
    }
    else if(newCart.length == 0){ // 동일한게 없을 경우
      zoob.push({name : tar , count : 1});
      localStorage.setItem('cart', JSON.stringify(zoob));
    }
    //전전요소찾기
    // e.target.previusElementSibling.previusElementSibling
  }
  else{
    localStorage.setItem('cart', JSON.stringify([{name : tar , count : 1}]));
    alert('등록완료');
  }
});

