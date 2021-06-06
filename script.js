score=0;
cross = true;
audio = new Audio('bgmusic1.mp3');
audiogo = new Audio('gameover.mp3');
setTimeout(()=>{
audio.play();
},1000)
document.onkeydown = function(e){
    console.log("Key Code is : " , e.keyCode)
    if(e.keyCode==38){
        mon = document.querySelector('.mon');
        mon.classList.add('animateMon');
        setTimeout( ()=> {
            mon.classList.remove('animateMon');  
        },700);
    }  
    if(e.keyCode==39){
        mon = document.querySelector('.mon');
        monX = parseInt(window.getComputedStyle(mon, null).getPropertyValue('left'));
        mon.style.left = monX + 112 + "px";
    
    }  
    if(e.keyCode==37){
        mon = document.querySelector('.mon');
        monX = parseInt(window.getComputedStyle(mon, null).getPropertyValue('left'));
        mon.style.left = (monX - 112) + "px";
    
    }  
}

setInterval( ()=> {
    mon = document.querySelector('.mon');
    gameOver = document.querySelector('.gameOver');
    obstacle= document.querySelector('.obstacle');


    dx = parseInt(window.getComputedStyle(mon, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(mon, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);
        console.log(offsetX , offsetY)
    if(offsetX<73 && offsetY<52){
    gameOver.innerHTML ="Game Over! Reload to Start Again!";
    mon.style.bottom = -250 + 'px';
    obstacle.classList.remove('obstacleAni'); 
    audiogo.play();
    
    setTimeout( ()=> {
        audiogo.pause();
        audio.pause();
       },3000)
    } 
    else if(offsetX<145 && cross){
        score++ ;
        updateScore(score)
        cross=false;
        setTimeout( ()=> {
         cross=true;
        },1000)
        setTimeout( ()=> {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
        newDur = aniDur - 0.1;
        obstacle.style.animationDuration = newDur + 's';
           },500)
       
    }
},100);

function updateScore(score){
    ScoreCont.innerHTML = "Your Score " + score ;
}