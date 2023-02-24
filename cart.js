//localStorage 갯수반응
let zoob = JSON.parse(localStorage.cart);
console.log(zoob);

zoob.forEach(function(i,k){
    let siu = `<div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100">
  <h5>${zoob[k]}</h5>
  </div>`;
$(".row").append(siu);
});