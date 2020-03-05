document.addEventListener("DOMContentLoaded",function(){
var modal = document.querySelector('.modal');
var dangky = document.querySelector('.dk');
var trolai = document.querySelector('.btn-s');
var trolai2 = document.querySelector('.btntrolai2');
var modalbody = document.querySelector('.modal__body');
var dky = document.querySelector('.dky');
var dn = document.querySelector('.dn');
var dangnhap = document.querySelector('.dangnhap');
var authhead2 = document.querySelector('.auth-head2');
var authbtn2 = document.querySelector('.auth-btn2');
var authhead = document.querySelector('.auth-head');
var authbtn = document.querySelector('.auth-btn');
dangky.onclick = function(){
   modal.classList.add('onmodal');
   dky.style.display="block";
   dn.style.display="none";
   modalbody.classList.add('modalbody');
   authbtn.style.fontSize ="250%";
   authbtn.style.color = "#f53e2d";
   authhead.style.color ="#999";
}
trolai.onclick =function(){
    modal.classList.remove('onmodal');
    modalbody.classList.remove('modalbody');
}
trolai2.onclick =function(){
    modal.classList.remove('onmodal');
    modalbody.classList.remove('modalbody');
}

dangnhap.onclick = function(){
    dky.style.display="none";
    dn.style.display="block";
    modal.classList.add('onmodal');
    modalbody.classList.toggle('modalbody');
    authhead2.style.fontSize = "250%";
    authhead2.style.color ="#f53e2d";
     authbtn2.style.color = "#999";
}




},false)
function ondangki(){
    var dky = document.querySelector('.dky');
var dn = document.querySelector('.dn');
var authhead = document.querySelector('.auth-head');
var authbtn = document.querySelector('.auth-btn');
    //hiện đăng ký ẩn đăng nhập
     dky.style.display="block";
     dn.style.display="none";
  authbtn.style.color = "#f53e2d";
  authhead.style.color ="#999";
  authbtn.style.fontSize ="250%";
   }
   function ondangnhap(){
    var dky = document.querySelector('.dky');
    var dn = document.querySelector('.dn');
    var authhead2 = document.querySelector('.auth-head2');
    var authbtn2 = document.querySelector('.auth-btn2');
    //hiện đăng nhập ẩn đăng ký
     dky.style.display="none";
     dn.style.display="block";
     authhead2.style.color ="#f53e2d";
     authbtn2.style.color = "#999";
    authhead2.style.fontSize = "250%";
   }