$(function(){
    var x = 0;
    var y = 0;
    var sect3 = document.getElementById('section-3');
    var sect5 = document.getElementById('section-5');

    setInterval(function(){
        x+=1;
        y+=1;
        sect3.style.backgroundPosition =  x + 'px' + ' ' + y + 'px';
        sect5.style.backgroundPosition =  -x + 'px' + ' ' + -y + 'px';

        if(x == 144){
          x=0;
          y=0;
        }
    }, 10);
});