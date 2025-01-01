
// const menubtn =document.querySelector('.menu-img'),

// navigation = document.querySelector('.nav-links');

// menubtn.addEventListener('click', showmenu)
// function  showmenu(){
//     navigation.classList.toggle('.show-nav-links')
// }

$(document).ready(function(){
    $(".menu-img").click(function(){
      $(".nav-links").hide();
    });
    $(".menu-img").click(function(){
        $(".nav-links").show();
      });
  });