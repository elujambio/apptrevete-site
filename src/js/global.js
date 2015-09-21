$(function(){
    var x = 0;
    var y = 0;
    var sect3 = document.getElementById('section-3');
    // var prueba = document.getElementById('prueba');    
    // var sect5 = document.getElementById('section-5');

    setInterval(function(){
        x+=1;
        y+=1;
        sect3.style.backgroundPosition =  x + 'px' + ' ' + y + 'px';
        // prueba.style.backgroundPosition =  x + 'px' + ' ' + -y + 'px';
        // sect5.style.backgroundPosition =  -x + 'px' + ' ' + -y + 'px';

        if(x == 144){
          x=0;
          y=0;
        }
    }, 10);
});

// var menu = document.getElementById('menu');
var menuButton = document.getElementById('menu-button');
var menuContainer = document.getElementById('menu-container');
var menu1 = document.getElementById('menu-1');
var menu2 = document.getElementById('menu-2');
var menu3 = document.getElementById('menu-3');
var menu4 = document.getElementById('menu-4');
var menu5 = document.getElementById('menu-5');

var toggle = 1;

function toggleMenu(){

    'use strict';

    if(toggle==0){
        menu.style.transition= "opacity .3s";
        menu.style.opacity=0;
        menu.style.pointerEvents="none";
        menuButton.style.animation="back .16s steps(19) forwards";
        toggle=1;
    }else{
        menu.style.transition= "opacity .3s";
        menu.style.opacity=1;
        menu.style.pointerEvents="all";
        menuButton.style.animation="forth .16s steps(19) forwards";
        toggle=0;
    }
}

menu1.addEventListener("click", toggleMenu);
menu2.addEventListener("click", toggleMenu);
menu3.addEventListener("click", toggleMenu);
menu4.addEventListener("click", toggleMenu);
menu5.addEventListener("click", toggleMenu);

menuContainer.addEventListener("click", toggleMenu);