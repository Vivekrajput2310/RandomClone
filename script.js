let btn1 = document.querySelector(".btn_one");
let btn2 = document.querySelector(".btn_two") ;
let mainNav = document.querySelector(".nav-main") ;
let title = document.querySelector("#title") ;

btn1.addEventListener("click" , slidebarOpen) ;
function slidebarOpen() {
  mainNav.classList.toggle("come") ;
  btn2.classList.toggle("cross");
  title.classList.add('fit');
}
btn2.addEventListener("click", slidebarClose);

function slidebarClose() {
  mainNav.classList.toggle("come");
  btn2.classList.toggle("cross");
  title.classList.remove('fit')
}