$(function(){
    var x = 0;
    var y = 0;
    var sect3 = document.getElementById('section-3');
    var prueba = document.getElementById('prueba');    
    var sect5 = document.getElementById('section-5');

    setInterval(function(){
        x+=1;
        y+=1;
        sect3.style.backgroundPosition =  x + 'px' + ' ' + y + 'px';
        prueba.style.backgroundPosition =  x + 'px' + ' ' + -y + 'px';
        sect5.style.backgroundPosition =  -x + 'px' + ' ' + -y + 'px';

        if(x == 144){
          x=0;
          y=0;
        }
    }, 10);
});

// var menu = document.getElementById('menu');
var menuButton = document.getElementById('menu-button');
var menuContainer = document.getElementById('menu-container');
var main = document.getElementById('main');

var toggle = 1;

var link1 = document.getElementById('link-1');
var link2 = document.getElementById('link-2');
var link3 = document.getElementById('link-3');
var link4 = document.getElementById('link-4');
var sections = document.getElementsByTagName('section');
var active;

// function activeSection(e){
//     active = document.getElementsByClassName('section active');
//     active.className = "section";
//     if(e == 1){
//         for(i=0; i<sections.length; i=i+1){
//             if($(sections[i]).attr('data-index') == 2){
//                 sections[i].className = "section active"
//             }
//         }
//     }
//     if(e == 2){
//         for(i=0; i<sections.length; i=i+1){
//             if($(sections[i]).attr('data-index') == 3){
//                 sections[i].className = "section active"
//             }
//         }
//     }    
//     if(e == 3){
//         for(i=0; i<sections.length; i=i+1){
//             if($(sections[i]).attr('data-index') == 5){
//                 sections[i].className = "section active"
//             }
//         }
//     }  
//     if(e == 4){
//         for(i=0; i<sections.length; i=i+1){
//             if($(sections[i]).attr('data-index') == 10){
//                 sections[i].className = "section active"
//             }
//         }
//     }             
// }

// link1.addEventListener("click", activeSection(1));
// link2.addEventListener("click", activeSection(2));
// link3.addEventListener("click", activeSection(3));
// link4.addEventListener("click", activeSection(4));


function toggleMenu(){

    'use strict';

    if(toggle==0){
        menu.style.transition= "opacity .3s";
        menu.style.opacity=0;
        menu.style.pointerEvents="none";
        main.style.pointerEvents="all";        
        menuButton.style.animation="back .2s steps(19) forwards";
        toggle=1;
    }else{
        menu.style.transition= "opacity .3s";
        menu.style.opacity=1;
        menu.style.pointerEvents="all";
        main.style.pointerEvents="none";
        menuButton.style.animation="forth .2s steps(19) forwards";
        toggle=0;
    }
}

menuContainer.addEventListener("click", toggleMenu);