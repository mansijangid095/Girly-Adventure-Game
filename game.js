score = 0;
cross = true;
document.onkeydown = function(e){
    console.log("Key code is: ", e.keyCode)
    if(e.keyCode==38){
        girl = document.querySelector('.girl');
        girl.classList.add('animegirl');
        setTimeout(() => {
            girl.classList.remove('animegirl')
        }, 1000);
    }
        if(e.keyCode==39){
            girl = document.querySelector('.girl');
           girlX = parseInt(window.getComputedStyle(girl,null).getPropertyValue('left'));
           girl.style.left = girlX + 112 + "px";
    }
    if(e.keyCode==37){
        girl = document.querySelector('.girl');
       girlX = parseInt(window.getComputedStyle(girl,null).getPropertyValue('left'));
       girl.style.left = (girlX - 112) + "px";
}
}

setInterval(() => {
    girl = document.querySelector('.girl');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    gx = parseInt(window.getComputedStyle(girl,null).getPropertyValue('left'));
    gy = parseInt(window.getComputedStyle(girl,null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    offsetx = Math.abs(gx-ox);
    offsety = Math.abs(gy-oy);
    // console.log(offsetx,offsety)
    if(offsetx<112 &&offsety<52){
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni');
    }
    else if(offsetx<145 && cross){
        score+=1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.2 ;
            obstacle.style.animationDuration= newDur + 's';
        }, 500);
    }
},10);

function updateScore(score){
    scoreCont.innerHTML = "Your Score: "+score
}